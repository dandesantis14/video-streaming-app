class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :url
      t.string :title
      t.string :rating
      t.string :sub_genre
      t.string :country
      t.integer :duration
      t.string :director
      t.string :description
      t.integer :year
      t.string :thumbnail_url
      t.string :art_url
      t.string :watch_count

      t.timestamps
    end
  end
end
