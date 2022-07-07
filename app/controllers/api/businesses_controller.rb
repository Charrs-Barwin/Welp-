class Api::BusinessesController < ApplicationController
    
  # def new
  #   @business = Business.new
  #   render :new
  # end

  def create
    @business = Business.new(business_params)
    @business.owner_id = current_user.id
    if @business.save
        render :show
    #   redirect_to business_url(@business)
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def show
    @business = Business.find(params[:id])
    if @business
      render :show
    else
      render json: @business.errors.full_messages, status: 404
    end
  end

  def index
    # @businesses = if params[:user_id]
    #                 Business.where(owner_id: params[:user_id])
    #             else
    #                 Business.all
    #             end
    @businesses = Business.all
    render :index
  end

  def edit
    @business = Business.find(params[:id])
    render :edit
  end

  def update
    @business = Business.find(params[:id])
    if @business.update(business_params)
      redirect_to business_url(@business)
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def destroy
    @business = Business.find(params[:id])
    if @business.destroy
      redirect_to businesses_url
    else
      render json: "Business not found."
    end
  end

  private

  def business_params
    params.require(:business).permit(:name,:location,:phone,:website)
  end

end
