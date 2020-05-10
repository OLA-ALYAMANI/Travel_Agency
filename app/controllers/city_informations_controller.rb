class CityInformationsController < ApplicationController
  before_action :set_city_information, only: [:show, :edit, :update, :destroy]

  # GET /city_informations
  # GET /city_informations.json
  def index
    @city_informations = CityInformation.all
  end

  # GET /city_informations/1
  # GET /city_informations/1.json
  def show
    @city_information = CityInformation.find(params[:id])
  end

  # GET /city_informations/new
  def new
    @city_information = CityInformation.new
  end

  # GET /city_informations/1/edit
  def edit
  end
  def displayAllCity
    @city_informations = CityInformation.all
    render json: {city: @city_informations }
  end
  # POST /city_informations
  # POST /city_informations.json
  def create
    @city_information = CityInformation.new(city_information_params)

    respond_to do |format|
      if @city_information.save
        format.html { redirect_to @city_information, notice: 'City information was successfully created.' }
        format.json { render :show, status: :created, location: @city_information }
      else
        format.html { render :new }
        format.json { render json: @city_information.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /city_informations/1
  # PATCH/PUT /city_informations/1.json
  def update
    respond_to do |format|
      if @city_information.update(city_information_params)
        format.html { redirect_to @city_information, notice: 'City information was successfully updated.' }
        format.json { render :show, status: :ok, location: @city_information }
      else
        format.html { render :edit }
        format.json { render json: @city_information.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /city_informations/1
  # DELETE /city_informations/1.json
  def destroy
    @city_information.destroy
    respond_to do |format|
      format.html { redirect_to city_informations_url, notice: 'City information was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_city_information
      @city_information = CityInformation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def city_information_params
      params.require(:city_information).permit(:image, :city_name, :city_about, :lat, :lng, :living_cost, :best_time_visit)
    end
end
