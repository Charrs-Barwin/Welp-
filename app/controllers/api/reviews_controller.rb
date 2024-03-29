class Api::ReviewsController < ApplicationController
  
  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.includes(:business).find(params[:id])
    if @review
      render :show
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def index
    @reviews = Review.where(business_id: params[:bsnId])
    render :index
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review.destroy
      render :show
    else
      render json: "Review not found."
    end
  end

  private

  def review_params
    params.require(:review).permit(:id,:user_id,:business_id,:body,:rating)
  end

end
