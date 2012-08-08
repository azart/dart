class Order < ActiveRecord::Base
  attr_accessible :unit_id, :name, :company, :phone, :email, :description

  belongs_to :unit

end
