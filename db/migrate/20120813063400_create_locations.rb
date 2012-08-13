#encoding: utf-8
class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :locale
      t.float :latitude
      t.float :longitude
      t.boolean :gmaps
      t.string :country
      t.string :city
      t.string :street
      t.string :building
      t.string :more
    end

    Location.create(:locale => "ru", :country => "РФ", :city => "Москва", :street => "ул. Азовская", :building => "д. 24", :more => "Тел/факс:(495) 735-43-44<br/>АДРЕС ОФИСА: ТЦ &laquo;Азовский&raquo;, офис 44")
    Location.create(:locale => "ru", :country => "РФ", :city => "Москва", :street => "Очаковское шоссе", :building => "д. 36 а", :more => "Тел/факс: (495) 755-68-62<br/>(ЮДЕНКОВ АЛЕКСАНДР)<br/>АДРЕС ПРОИЗВОДСТВА:")
  end
end
