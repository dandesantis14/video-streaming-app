class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.integer :last_watched_id
      t.string :last_watched_time

      t.timestamps
    end
  end
end
