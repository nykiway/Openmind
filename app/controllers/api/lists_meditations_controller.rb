class Api::ListsMeditationsController < ApplicationController
  def create
    @list_meditation = ListMeditation.new(list_meditation_params)
    if @list_meditation.save
      render :show
    else
      render json: @list_meditation.errors.full_messages
    end
  end

  def show
    @list_meditation = ListMeditation.find_by(id: params[:id])
    if @list_meditation
      render :show
    else
      render json: @list_meditation.errors.full_messages
    end
  end

  def destroy
    @list_meditation = ListMeditation.find_by(
      list_id: params[:list_meditation][:list_id],
      meditation_id: params[:list_meditation][:meditation_id],
    )
    if @list_meditation
      @list_meditation.destroy
    else
      render @list_meditation.errors.full_messages
    end
  end

  private
  def list_meditation_params
    params.require(:list_meditation).permit(:list_id, :meditation_id)
  end
end
