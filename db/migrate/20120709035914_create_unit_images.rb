class CreateUnitImages < ActiveRecord::Migration
  def change
    create_table :unit_images do |t|
      t.integer :unit_id
      t.string :title
      t.boolean :cover, :default => false
      t.boolean :preview, :default => false
      t.integer :image_order, :default => 0
      t.string :image_file_name
      t.string :image_content_type
      t.integer :image_file_size

      t.timestamps
    end
    add_index :unit_images, :image_order
    add_index :unit_images, :unit_id
    add_index :unit_images, :cover
    add_index :unit_images, :preview
  end

end
