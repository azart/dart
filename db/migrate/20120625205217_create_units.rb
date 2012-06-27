#encoding: utf-8
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

    Unit.create(:locale => "ru", :title => "Компания", :unit_order => 0, :layout => "about")
    Unit.create(:locale => "ru", :title => "О нас", :parent_id => 1, :unit_order => 0, :layout => "about_us")
    Unit.create(:locale => "ru", :title => "Производство", :parent_id => 1, :unit_order => 1, :layout => "about_us")
    Unit.create(:locale => "ru", :title => "Награды и отзывы", :parent_id => 1, :unit_order => 2, :layout => "about_awards")
    Unit.create(:locale => "ru", :title => "Лицензии", :parent_id => 1, :unit_order => 3, :layout => "about_awards")
    Unit.create(:locale => "ru", :title => "Наши партнеры", :parent_id => 1, :unit_order => 4, :layout => "about_awards")
    Unit.create(:locale => "ru", :title => "Вакансии", :parent_id => 1, :unit_order => 5, :layout => "about_awards")

    Unit.create(:locale => "ru", :title => "Услуги", :unit_order => 1, :layout => "services")
    Unit.create(:locale => "ru", :title => "Проектирование и строительство", :parent_id => 8, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "ru", :title => "Дизайн интерьеров", :parent_id => 8, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "ru", :title => "Офисные перегородки", :parent_id => 8, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "ru", :title => "Световое оборудование и эффекты", :parent_id => 8, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "ru", :title => "мультимедийное оборудование", :parent_id => 8, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "ru", :title => "Оформление мероприятий", :parent_id => 8, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "ru", :title => "Аргонная сварка", :parent_id => 8, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "ru", :title => "Объемные буквы", :parent_id => 8, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "ru", :title => "Кейтеринг", :parent_id => 8, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "ru", :title => "Expooffice", :parent_id => 8, :unit_order => 0, :layout => "service")

    Unit.create(:locale => "ru", :title => "Портфолио", :unit_order => 2, :layout => "projects")
    Unit.create(:locale => "ru", :title => "Выставочные стенды", :parent_id => 20, :unit_order => 1, :layout => "projects")
    Unit.create(:locale => "ru", :title => "Строительство и электроэнергия", :parent_id => 21, :unit_order => 1, :layout => "projects")
    Unit.create(:locale => "ru", :title => "Строительство торгового центра", :parent_id => 22, :unit_order => 1, :layout => "project")
    Unit.create(:locale => "ru", :title => "Электроэнергия в массы", :parent_id => 22, :unit_order => 2, :layout => "project")
    Unit.create(:locale => "ru", :title => "Транспорт", :parent_id => 21, :unit_order => 2, :layout => "projects")
    Unit.create(:locale => "ru", :title => "Аэрокосмическая индустрия", :parent_id => 21, :unit_order => 3, :layout => "projects")
    Unit.create(:locale => "ru", :title => "Здравоохранение и медицина", :parent_id => 21, :unit_order => 4, :layout => "projects")
    Unit.create(:locale => "ru", :title => "Энергетика и природные ресурсы", :parent_id => 21, :unit_order => 5, :layout => "projects")
    Unit.create(:locale => "ru", :title => "Недвижимиость", :parent_id => 21, :unit_order => 6, :layout => "projects")
    Unit.create(:locale => "ru", :title => "Интерьеры", :parent_id => 20, :unit_order => 2, :layout => "projects")
    Unit.create(:locale => "ru", :title => "Мероприятия", :parent_id => 20, :unit_order => 3, :layout => "projects")

    Unit.create(:locale => "ru", :title => "Клиенты", :unit_order => 3, :layout => "about_awards")
    Unit.create(:locale => "ru", :title => "Новости", :unit_order => 4, :layout => "news")
    Unit.create(:locale => "ru", :title => "Кейтринг", :parent_id => 33, :unit_order => nil, :layout => "news")
    Unit.create(:locale => "ru", :title => "Объемные буквы", :parent_id => 33, :unit_order => nil, :layout => "news")

    Unit.create(:locale => "ru", :title => "Оставить заявку", :unit_order => 5, :layout => "order")
    Unit.create(:locale => "ru", :title => "Проектирование и строительство", :parent_id => 34, :unit_order => 5, :layout => "order")
    Unit.create(:locale => "ru", :title => "Дизайн интерьеров", :parent_id => 34, :unit_order => 5, :layout => "order")
    Unit.create(:locale => "ru", :title => "Expooffice", :parent_id => 34, :unit_order => 5, :layout => "order")

    Unit.create(:locale => "ru", :title => "Контакты", :unit_order => 6, :layout => "contacts")
  end
end
