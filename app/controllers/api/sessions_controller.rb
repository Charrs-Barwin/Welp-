class Api::SessionsController < ApplicationController
    before_action :require_login, only: [:destroy]

    # def new
    #     render :new
    # end
    
    def create
        @user = User.find_by_credentials(params[:user][:name],params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show';
        else
            render json: ['Invalid username or password'], status: 401
            # render :new
        end
    end

    # def destroy
    #     # Render an empty {} upon successful logout.
    #     # Render a 404 message if there is no current_user to logout.
    #     log_out!
    #     render {}
    #     # render json: ['logged out (test)']
    #     # redirect_to api_session_url
    #     # render '/'
    # end
    def destroy
        @user = current_user
        if @user
            log_out!
            render {}
        else
            render json: ['You are currently not logged in.']#, status: 404
        end
      end
end
