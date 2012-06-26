class Unit < ActiveRecord::Base

  #self.per_page = 12
  #belongs_to :author, :class_name => 'User'
  belongs_to :unit, :foreign_key => :parent_id
  has_many :units, :foreign_key => :parent_id, :order => 'unit_order'
  has_many :unit_images
  has_many :unit_files

  validates_presence_of :title, :locale, :short_url

  attr_accessible :locale, :title, :parent_id, :welcome_slider, :description, :content, :layout, :unit_order, :short_url, :seo_title, :seo_keywords, :seo_description, :created_at, :preview_id

  attr_writer :preview_id
  attr_reader :preview_id

  scope :main_menu, where(:parent_id => nil).order(:unit_order)

  #default_scope order("created_at DESC")
  #scope :side_bar, order("created_at DESC").limit(3)
  #scope :side_bar, lambda { |post| where("id <> ?", post.id).order("created_at DESC").limit(3) }

  before_save :generate_short_url
  after_create :update_attachements

  def initialize(*args)
    super
    self.preview_id = rand(99999999) + 99999999 if self.preview_id.nil? && self.new_record?
  end

  def get_id
    self.id || self.preview_id
  end

  private

  def update_attachements
    unless self.preview_id.nil?
      images = UnitImage.find_all_by_post_id(self.preview_id)
      images.each do |image|
        image.post_id = self.id
        image.save
      end
    end
  end

  def generate_short_url
    self.short_url = Russian.transliterate(self.title.downcase.gsub(' ', '-')) if self.short_url.blank? && !self.title.blank?
  end

  def self.tree
    tree = []
    units = Unit.main_menu
    units.each do |fl|
      tree << fl
      slc = fl.units
      slc.each do |sl|
        sl.title = "+" + sl.title
        tree << sl
        tlc = sl.units
        tlc.each do |tl|
          tl.title = "++" + tl.title
          tree << tl
        end if tlc
      end if slc
    end
    tree
  end

end
