#encoding: utf-8
class AddEnData < ActiveRecord::Migration
  def change

    Unit.create(:locale => "en", :title => "Company", :unit_order => 0, :layout => "about")
    Unit.create(:locale => "en", :title => "About us", :parent_id => 68, :unit_order => 0, :layout => "about_us", :welcome_slider => true)
    Unit.create(:locale => "en", :title => "Production", :parent_id => 68, :unit_order => 1, :layout => "about_us")
    Unit.create(:locale => "en", :title => "Awards and reviews", :parent_id => 68, :unit_order => 2, :layout => "about_awards")
    Unit.create(:locale => "en", :title => "Licenses", :parent_id => 68, :unit_order => 3, :layout => "about_awards")
    Unit.create(:locale => "en", :title => "Our partners", :parent_id => 68, :unit_order => 4, :layout => "about_awards")
    Unit.create(:locale => "en", :title => "Vacancies", :parent_id => 68, :unit_order => 5, :layout => "about_awards")

    Unit.create(:locale => "en", :title => "Services", :unit_order => 1, :layout => "services")
    Unit.create(:locale => "en", :title => "Design and construction", :parent_id => 75, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "en", :title => "Interior design", :parent_id => 75, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "en", :title => "Office partitions", :parent_id => 75, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "en", :title => "Световое оборудование и эффекты", :parent_id => 75, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "en", :title => "Multimedia equipment", :parent_id => 75, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "en", :title => "Making events", :parent_id => 75, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "en", :title => "Argon welding", :parent_id => 75, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "en", :title => "Large letters", :parent_id => 75, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "en", :title => "Catering", :parent_id => 75, :unit_order => 0, :layout => "service")
    Unit.create(:locale => "en", :title => "Expooffice", :parent_id => 75, :unit_order => 0, :layout => "service")

    Unit.create(:locale => "en", :title => "Portfolio", :unit_order => 2, :layout => "projects")
    Unit.create(:locale => "en", :title => "Exhibition Stands", :parent_id => 86, :unit_order => 1, :layout => "projects")
    Unit.create(:locale => "en", :title => "Construction and electricity", :parent_id => 86, :unit_order => 1, :layout => "projects")
    Unit.create(:locale => "en", :title => "Transport", :parent_id => 86, :unit_order => 2, :layout => "projects")
    Unit.create(:locale => "en", :title => "Aerospace industry", :parent_id => 86, :unit_order => 3, :layout => "projects")
    Unit.create(:locale => "en", :title => "Health and Medicine", :parent_id => 86, :unit_order => 4, :layout => "projects")
    Unit.create(:locale => "en", :title => "Energy and natural resources", :parent_id => 86, :unit_order => 5, :layout => "projects")
    Unit.create(:locale => "en", :title => "Real estate", :parent_id => 86, :unit_order => 6, :layout => "projects")
    Unit.create(:locale => "en", :title => "Interiors", :parent_id => 86, :unit_order => 2, :layout => "projects")
    Unit.create(:locale => "en", :title => "Events", :parent_id => 86, :unit_order => 3, :layout => "projects")

    Unit.create(:locale => "en", :title => "Clients", :unit_order => 3, :layout => "about_awards")
    Unit.create(:locale => "en", :title => "News", :unit_order => 4, :layout => "news")
    Unit.create(:locale => "en", :title => "Our new site", :parent_id => 97, :unit_order => nil, :layout => "news", :welcome_slider => true, :description => "Развернутое описание объема заметного в нексколько строчек.")

    Unit.create(:locale => "en", :title => "Order", :unit_order => 5, :layout => "order")
    Unit.create(:locale => "en", :title => "Design and construction", :parent_id => 100, :unit_order => 5, :layout => "order", :short_url => "order_project_building")
    Unit.create(:locale => "en", :title => "Interior design", :parent_id => 100, :unit_order => 5, :layout => "order", :short_url => "order_interior_design")
    Unit.create(:locale => "en", :title => "Expooffice", :parent_id => 100, :unit_order => 5, :layout => "order", :short_url => "order_expo_office")

    Unit.create(:locale => "en", :title => "Contacts", :unit_order => 6, :layout => "contacts", :content => "<ul class='menu_about' style='height: 248px;'><li class='contact'><span><div class='contact_box'><p>Тел/факс : <br>(495) 735-43-44<br>АДРЕС ОФИСА : г.Москва, ул.Азовская, д .24, офис 44 ТЦ 'Азовский'</p></div></span></li><li class='contact'><span><div class='contact_box'><p>Тел/факс: <br>(495) 755-68-62<br>(ЮДЕНКОВ АЛЕКСАНДР)<br>АДРЕС ПРОИЗВОДСТВА : г.Москва, Очаковское шоссе, д .36 а</p></div></span></li><li class='contact no_border'><span><div class='contact_box'><p>E-MAIL :<br/>info @dart-expo.en</p></div></span></li></ul>")

  end
end
