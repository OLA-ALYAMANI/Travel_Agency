class CreatePackages < ActiveRecord::Migration[6.0]
  def change
    create_table :packages do |t|
      t.text :destination
      t.string :flight
      t.integer :hotel
      t.text :plan
      t.float :price

      t.timestamps
    end
  end
end
