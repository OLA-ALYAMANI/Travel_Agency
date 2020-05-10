class CreateCityInformations < ActiveRecord::Migration[6.0]
  def change
    create_table :city_informations do |t|
      t.string :image
      t.string :city_name
      t.text :city_about
      t.float :lat
      t.float :lng
      t.float :living_cost
      t.string :best_time_visit

      t.timestamps
    end
  end
end
