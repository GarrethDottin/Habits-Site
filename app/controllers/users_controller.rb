class UsersController < ApplicationController

  def index
    @habit = User.new
  end

  def create
    @user = User.new(params[:user])
    @user.save
    redirect_to :back
  end

end