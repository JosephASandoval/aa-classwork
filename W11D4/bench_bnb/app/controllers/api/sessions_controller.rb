class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentails(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      # come back and fix this
    else
      render json: ["Invalid user credentails"], status: 401
    end

  end

  def destroy
    if current_user
        logout!
        render json: {}
    else
        render json: ["not signed in"], status: 404 # double check later
    end
  end
  
end
