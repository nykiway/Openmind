class Api::ListsController < ApplicationController
  def index
    @lists = List.all
    render :index
  end
  
  def show
    @list = List.find(params[:id])
    render :show
  end

  def create
    @list = List.create(list_params)
    @list.userId = params[:userId]
    if @list.save
    else
      flash[:errors] = @list.errors.full_messages
    end
    redirect_to 
  end
end
