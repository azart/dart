class UnitsController < ApplicationController
  load_and_authorize_resource
  # GET /units
  # GET /units.json
  def index
    @units = Unit.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @units }
    end
  end

  # GET /units/1
  # GET /units/1.json
  def show
    @unit = Unit.find_by_short_url(params[:short_url]) if params[:short_url]

    raise NotFound unless @unit

    #if @unit.short_url == "press-about-company"
    #  year = params[:year] if !params[:year].nil?
    #  if year.nil?
    #    @units = Unit.press.paginate(:page => params[:page])
    #  else
    #    @units = Unit.press.where("created_at between ? AND ?", "#{year}-01-01 00:00:00".to_datetime(), "#{year}-12-31 23:59:59".to_datetime()).paginate(:page => params[:page])
    #  end
    #  @years = Unit.find_by_sql("SELECT DISTINCT strftime('%Y', created_at) year from units where parent_id = 13 ORDER BY created_at DESC")
    #end

    respond_to do |format|
      format.html {
        render action: @unit.layout
      }
      format.xml { render xml: @unit }
      format.json { render json: @unit }
    end
  end

  # GET /units/new
  # GET /units/new.json
  def new
    @unit.parent_id = params[:parent_id] if params[:parent_id]
    @unit.layout = @unit.unit.layout if params[:parent_id]

    respond_to do |format|
      format.html { render layout: "editor" }
      format.json { render json: @unit }
    end
  end

  # GET /units/1/edit
  def edit
    @unit = Unit.find(params[:id])
    render layout: "editor"
  end

  # POST /units
  # POST /units.json
  def create
    @unit = Unit.new(params[:unit])

    respond_to do |format|
      if @unit.save
        format.html { redirect_to root_url, notice: 'Unit was successfully created.' }
        format.json { render json: @unit, status: :created, location: @unit }
      else
        format.html { render action: "new", layout: "editor" }
        format.json { render json: @unit.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /units/1
  # PUT /units/1.json
  def update
    @unit = Unit.find(params[:id])

    respond_to do |format|
      if @unit.update_attributes(params[:unit])
        format.html { redirect_to root_url, notice: 'Unit was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit", layout: "editor" }
        format.json { render json: @unit.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /units/1
  # DELETE /units/1.json
  def destroy
    @unit = Unit.find(params[:id])
    @unit.destroy

    respond_to do |format|
      format.html { redirect_to units_url }
      format.json { head :no_content }
    end
  end
end
