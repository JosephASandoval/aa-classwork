class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      redirect_to user_url(@user)
    else
      render json: @user.errors.full_messages, status: 401
      # might have to add a new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password_digest, :password, :session_token)
  end
end
