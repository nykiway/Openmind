class Api::MeditationsController < ApplicationController
  def index
    @meditations = Meditation.all
    render :index
  end
  
  def show
    @meditation = Meditation.find_by(id: params[:id])
    if @meditation
      render :show
    else
      render json @meditation.errors.full_messages, status: 422
    end
  end

  def destroy
  
  end
end
