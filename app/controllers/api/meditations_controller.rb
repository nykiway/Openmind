class Api::MeditationsController < ApplicationController
  def index
    @meditations = Meditation.all
    render :index
  end
  
  def show
    @meditation = Meditation.find(params[:id])
    render :show
  end
end
