#encoding: utf-8
class Role
  attr_accessor :name
  attr_accessor :cut

  def self.collection
    list = [
        Role.new(:name => 'Пользователь', :cut => 1),
        Role.new(:name => 'Администратор', :cut => 0)
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