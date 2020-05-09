class CreatePlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :places do |t|
      t.string :image
      t.string :place
      t.text :description
      t.belongs_to :city_information, null: false, foreign_key: true

      t.timestamps
    end
  end
end
