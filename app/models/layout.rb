#encoding: utf-8
class Layout
  attr_accessor :name
  attr_accessor :cut

  def self.collection
    list = [
        Layout.new(:name => 'Компания', :cut => "about"),
        Layout.new(:name => 'Компания / О нас', :cut => "about_us"),
        Layout.new(:name => 'Компания / Отзывы', :cut => "about_awards"),
        Layout.new(:name => 'Услуги', :cut => "services"),
        Layout.new(:name => 'Услуга', :cut => "service"),
        Layout.new(:name => 'Новости', :cut => "news"),
        Layout.new(:name => 'Новость', :cut => "news_single"),
        Layout.new(:name => 'Заявка', :cut => "order"),
        Layout.new(:name => 'Контакты', :cut => "contacts"),
        Layout.new(:name => 'Портфолио', :cut => "projects"),
        Layout.new(:name => 'Проект', :cut => "project")
    ]
    list
  end

  def self.include?(role_cut)
    collection.each do |role|
      return true if role.cut == role_cut
    end
    false
  end

  def initialize(hash)
    self.name = hash[:name]
    self.cut = hash[:cut]
  end

end