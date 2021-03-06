class Api::ListsController < ApplicationController
  before_action :require_logged_in!
  def index
    @lists = List.all
    render :index
  end
  
  def show
    @list = List.find_by(id: params[:id])
    if @list
      render :show
    else
      render json: ['There are no lists']
    end
  end

  def update
    @list = current_user.lists.find_by(id: params[:id])
    if @list && @list.update(list_params)
      render :show
    else
      flash[:errors] = ['Your list was not able to be updated!']
      render :show
    end
  end

  def create
    @list = List.create(list_params)
    if @list.save!
    else
      flash[:errors] = @list.errors.full_messages
    end
    render :show
  end

  def destroy
    @list = List.find(params[:id])
    if @list
      @list.destroy
      render :show
    else
      render json: ["List does not exist"], status: 404
    end
  end

  private
  def list_params
    params.require(:list).permit(:title, :description, :userId)
  end
end
