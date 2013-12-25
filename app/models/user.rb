class User < ActiveRecord::Base
  attr_accessible :profile, :habit, :username
end
