class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :name
      t.integer :unit_id
      t.string :company
      t.string :phone
      t.string :email
      t.text :description

      t.timestamps
    end
  end
end
