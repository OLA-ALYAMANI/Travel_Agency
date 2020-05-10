class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :package, foreign_key: true
      t.integer :member

      t.timestamps
    end
  end
end
