#encoding: utf-8
class Layout
  attr_accessor :name
  attr_accessor :cut

  def self.collection
    list = [
        Layout.new(:name => 'Список услуг', :cut => "services"),
        Layout.new(:name => 'Услуга', :cut => "service"),
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