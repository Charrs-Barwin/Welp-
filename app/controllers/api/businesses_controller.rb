class Api::BusinessesController < ApplicationController
    
  def create
    @business = Business.new(business_params)
    @business.owner_id = current_user.id
    if @business.save
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def show
    @business = Business.includes(:reviews).find(params[:id])
    if @business
      render :show
    else
      render json: @business.errors.full_messages, status: 404
    end
  end

  def index
    @businesses = Business.includes(:reviews,:reviewers).all
    render :index
  end

  def update
    @business = Business.find(params[:id])
    if @business.update(business_params)
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def destroy
    @business = Business.find(params[:id])
    if @business.destroy
      render :show
    else
      render json: "Business not found."
    end
  end

  private

  def business_params
    params.require(:business).permit(:id,:name,:location,:phone,:website,:rating)
  end

end
