class Api::SessionsController < ApplicationController
    before_action :require_login, only: [:destroy]

    def create
        @user = User.find_by_credentials(params[:user][:name],params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show';
        else
            render json: ['Invalid username or password'], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            log_out!
            render json: {}, status: 200
        else
            render json: ['You are currently not logged in.'], status: 404
        end
      end
end
