class UnitImagesController < ApplicationController
  layout false

  def upload
    filename = params[:qqfile]
    file = File.open("/tmp/#{filename}", 'wb')
    file.write(request.body.read)
    file.close

    image = UnitImage.create(:unit_id => params[:unit_id], :image => File.open("/tmp/#{filename}", 'r'))

    File.delete("/tmp/#{filename}")

    render :text => "{success:true, id:#{image.id}, new_filename:'#{image.image.url(:preview_item)}', parent_class_name:'unit'}"
  rescue Exception => e
    render :text => "{error:#{e.message}}"
  end

  def destroy
    @image = UnitImage.find(params[:id])
    @image_id = @image.id
    @image.delete
  end

  def update
    image = UnitImage.find(params[:id])

    unless image.nil?
      image.cover = params[:cover]
      image.preview = params[:preview]
      if params[:title] == 'empty'
        image.title = ''
      else
        image.title = params[:title]
      end
      image.save
    end

    render :text => "Ok"
  end

end
