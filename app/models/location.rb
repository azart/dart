class Location < ActiveRecord::Base

  acts_as_gmappable

  attr_accessible :locale, :latitude, :longitude, :gmaps, :local, :country, :city, :building, :more, :address, :street

  def gmaps4rails_address
    "#{self.country}, #{self.city}, #{self.street}, #{self.building}"
  end

  def gmaps4rails_infowindow
    "<p class='gmaps-info'>#{self.more} #{self.country}, #{self.city}, #{self.street}, #{self.building}</p>"
  end

  def gmaps4rails_marker_picture
    {
        "picture" => "/assets/dart-map.png",
        "width" => 126,
        "height" => 34
        #"marker_anchor" => [ 70, 60],
        #"shadow_picture" => "/assets/shadow_marker.png" ,
        #"shadow_width" => "244",
        #"shadow_height" => "56",
        #"shadow_anchor" => [70, 55]
    }
  end


end
