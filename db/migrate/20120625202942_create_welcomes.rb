class CreateWelcomes < ActiveRecord::Migration
  def change
    create_table :welcomes do |t|
      t.string :title
      t.string :phone
      t.text :description
      t.string :locale
      t.string :seo_title
      t.string :seo_keywords
      t.string :seo_description

      t.timestamps
    end
    add_index :welcomes, :locale, :unique => true
  end
end
