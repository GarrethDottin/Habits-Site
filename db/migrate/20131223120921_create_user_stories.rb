class CreateUserStories < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.text :habit
      t.binary :profile

    end
  end
end
