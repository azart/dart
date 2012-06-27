class Welcome < ActiveRecord::Base

  attr_accessible :title, :phone, :description, :locale, :seo_title, :seo_keywords, :seo_description

end
