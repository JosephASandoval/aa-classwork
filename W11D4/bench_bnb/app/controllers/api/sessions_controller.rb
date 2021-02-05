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
      render json: ["Invalid user credentails"], status 401
    end

  end

  def destroy
    logout!
    redirect_to new_session_url # double check later
  end
  
end
