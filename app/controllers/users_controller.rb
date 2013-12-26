class UsersController < ApplicationController

  def index
    @habit = User.new
    @first_Story = User.find(1)
    @second_Story = User.find(2)
    @third_Story = User.find(3)
    @fourth_Story = User.find(4)
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      render
    end
    redirect_to :back
  end

end