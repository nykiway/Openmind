class Api::ListsController < ApplicationController
  before_action :require_logged_in!
  def index
    @lists = List.all
    render :index
  end
  
  def show
    @list = List.find(params[:id])
    render :show
  end

  def edit
    @list = List.find_by(id: params[:id])
    render :edit
  end

  def update
    @list = current_user.lists.find_by(id: params[:id])
    if @list && @list.update(list_params)
      redirect_to user_url(@list.userId)
    else
      flash[:errors] = ['Your list was not able to be updated!']
      render :edit
    end
  end

  def create
    @list = List.create(list_params)
    # @list.userId = params[:userId]
    if @list.save!
    else
      flash[:errors] = @list.errors.full_messages
    end
    render :show
  end

  private
  def list_params
    params.require(:list).permit(:title, :description, :userId)
  end
end
