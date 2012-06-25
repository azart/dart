class CreateUnits < ActiveRecord::Migration
  def change
    create_table :units do |t|
      t.string :locale
      t.string :title
      t.integer :parent_id
      t.text :description
      t.text :content
      t.string :layout
      t.integer :unit_order
      t.string :short_url
      t.string :seo_title
      t.string :seo_keywords
      t.string :seo_description
      t.timestamps
    end

    add_index :units, :locale
    add_index :units, :parent_id
    add_index :units, :short_url
  end

  Unit.create()
end
