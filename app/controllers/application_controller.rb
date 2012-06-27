class ApplicationController < ActionController::Base
  protect_from_forgery


  before_filter :set_locale
  before_filter :default_data

  #rescue_from NotFound, :with => :not_found
  #rescue_from ActiveRecord::RecordNotFound, :with => :not_found


  def default_url_options(options={})
    logger.debug "default_url_options is passed options: #{options.inspect}\n"
    { :locale => I18n.locale }
  end

  protected

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  private

  def default_data
    @main_menu = Unit.main_menu(I18n.locale)
    @welcome = Welcome.where(:locale => I18n.locale).first
  end

  def access_denied
    redirect_to access_denied_path
  end

  def not_found
    redirect_to not_found_path
  end

end
