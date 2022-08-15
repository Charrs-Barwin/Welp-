class Api::UsersController < ApplicationController
    before_action :require_login, only: [:show,:index]

    def create
        @user = User.create(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: ["Password is too short (minimum is 6 characters)"], status: 401
        end
    end

    def show
        @user = User.find(params[:id])
        # render @user ? :show : json: ["User not found"], status: 404
        if @user
            render :show
        else
            render json: ["User not found"], status: 404
        end
    end

    def index
        @users = User.all
        render :index
    end

    private
    
    def user_params
        params.require(:user).permit(:id,:name,:email,:password)
    end
end
