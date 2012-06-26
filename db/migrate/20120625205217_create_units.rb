class CreateUnits < ActiveRecord::Migration
  def change
    create_table :units do |t|
      t.string :locale
      t.string :title
      t.integer :parent_id
      t.boolean :welcome_slider
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

  Unit.create (:locale => "ru", :title => "Компания", :parent_id => nil, :unit_order => 0, :layout => ""
  Unit.create (:locale => "ru", :title => "О нас", :parent_id => ""
  Unit.create (:locale => "ru", :title => "Производство
  Unit.create (:locale => "ru", :title => "Награды и отзывы
  Unit.create (:locale => "ru", :title => "Лицензии
  Unit.create (:locale => "ru", :title => "Наши партнеры
  Unit.create (:locale => "ru", :title => "Вакансии





  КОМПАНИЯ

  О нас
  Производство
  Награды и отзывы
  Лицензии
  Наши партнеры
  Вакансии



end
