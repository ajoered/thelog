class UsersController < ApplicationController

  def profile
    @spots = current_user.spots
    
  end
end
