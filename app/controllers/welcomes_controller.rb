class WelcomesController < ApplicationController
  load_and_authorize_resource

  before_filter :get_locations, :only => [ :new, :edit ]

  def set_lang
    raise NotFound unless Language.include?(params[:lang_cut])
    redirect_to "/?locale=#{params[:lang_cut]}"
  end

   # GET /welcomes
  # GET /welcomes.json
  def index
    @last_news = Unit.where(:locale => I18n.locale).where("parent_id = ? OR parent_id = ?", 99, 52).order("created_at DESC").first
    @covers = UnitImage.includes(:unit).where("units.locale = ? and units.welcome_slider = ? and unit_images.cover = ?", I18n.locale, true, true).order("random ()")
    respond_to do |format|
      format.html
      format.json { render json: @welcomes }
    end
  end

  # GET /welcomes/1
  # GET /welcomes/1.json
  def show
    @welcome = Welcome.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @welcome }
    end
  end

  # GET /welcomes/new
  # GET /welcomes/new.json
  def new
    @welcome = Welcome.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @welcome }
    end
  end

  # GET /welcomes/1/edit
  def edit
    @welcome = Welcome.find(params[:id])
    render layout: "editor"
  end

  # POST /welcomes
  # POST /welcomes.json
  def create
    @welcome = Welcome.new(params[:welcome])

    respond_to do |format|
      if @welcome.save
        format.html { redirect_to @welcome, notice: 'Welcome was successfully created.' }
        format.json { render json: @welcome, status: :created, location: @welcome }
      else
        format.html { render action: "new" }
        format.json { render json: @welcome.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /welcomes/1
  # PUT /welcomes/1.json
  def update
    @welcome = Welcome.find(params[:id])

    respond_to do |format|
      if @welcome.update_attributes(params[:welcome])
        format.html { redirect_to @welcome, notice: 'Welcome was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @welcome.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /welcomes/1
  # DELETE /welcomes/1.json
  def destroy
    @welcome = Welcome.find(params[:id])
    @welcome.destroy

    respond_to do |format|
      format.html { redirect_to welcomes_url }
      format.json { head :no_content }
    end
  end

  private

  def get_locations
    @locations = Location.where("locale = ?", I18n.locale)
  end


end
