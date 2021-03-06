#encoding: utf-8
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
      t.string :email

      t.timestamps
    end

    add_index :welcomes, :locale, :unique => true

    Welcome.create(:locale => "ru", :title => "DART EXPO выставочные стенды с продолжением", :phone => "+7 (495) 735 43 44", :description => "<p>Компания ДАРТ ЭКСПО работает на рынке выставочных услуг с 2000  года. За эти годы компания выработала определенные представления о том, как надо организовать рабочий процесс чтобы получить отличный результат, воспитала отличный персонал и создала достаточно сильную производственно-складскую базу.</p><p>В настоящий момент цель нашей компании &ndash; лидирующие позиции на рынке, основу которой составляют индивидуальный подход и качественное воплощение проектов  для каждого из наших клиентов. И поверьте, у нас есть все чтобы осуществить задуманное. </p><p>Четкое и налаженное взаимодействие всех подразделений компании, технологии и оборудование, используемые в работе,  правильно подбираемые материалы, позволяют предоставить нашим клиентам гибкие объективные цены, исключительно высокое качество и  точные сроки  выполнения проектов.</p>", :email => "anton@black-sheep.ru")
    Welcome.create(:locale => "en", :title => "DART EXPO official site", :phone => "+7 (495) 735 43 44", :description => "<p>Description</p>")
  end
end
