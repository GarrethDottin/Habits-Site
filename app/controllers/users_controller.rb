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
    respond_to do |format|
    if @user.save
        format.html { redirect_to(@user, :notice => 'Post created.') }
        format.js
    end
    end
  end

end