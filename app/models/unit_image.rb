class UnitImage < ActiveRecord::Base
  attr_accessible :unit_id, :title, :cover, :image, :image_content_type, :image_file_name, :image_file_size

  belongs_to :unit

  has_attached_file :image,
                    :styles => {
                        :preview_item => "213x81#",
                        :awards => "170x244#",
                        :big => "1200x700#",
                        :logo_middle => "190x190>"
                    },
                    :default_url =>  "missing.png",
                    :url =>  "/unit_images/:id/:style_:basename.:extension"

  validates_attachment_presence :image, :message => I18n.t("paperclip.errors.presence")
  validates_attachment_content_type :image, :content_type => ['image/jpeg', 'image/png', 'image/gif'], :message => I18n.t("paperclip.errors.content_type")
  
  default_scope order("unit_images.image_order, unit_images.id")

end
