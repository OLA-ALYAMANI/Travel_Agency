require 'test_helper'

class CityInformationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @city_information = city_informations(:one)
  end

  test "should get index" do
    get city_informations_url
    assert_response :success
  end

  test "should get new" do
    get new_city_information_url
    assert_response :success
  end

  test "should create city_information" do
    assert_difference('CityInformation.count') do
      post city_informations_url, params: { city_information: { best_time_visit: @city_information.best_time_visit, city_about: @city_information.city_about, city_name: @city_information.city_name, image: @city_information.image, lat: @city_information.lat, living_cost: @city_information.living_cost, lng: @city_information.lng } }
    end

    assert_redirected_to city_information_url(CityInformation.last)
  end

  test "should show city_information" do
    get city_information_url(@city_information)
    assert_response :success
  end

  test "should get edit" do
    get edit_city_information_url(@city_information)
    assert_response :success
  end

  test "should update city_information" do
    patch city_information_url(@city_information), params: { city_information: { best_time_visit: @city_information.best_time_visit, city_about: @city_information.city_about, city_name: @city_information.city_name, image: @city_information.image, lat: @city_information.lat, living_cost: @city_information.living_cost, lng: @city_information.lng } }
    assert_redirected_to city_information_url(@city_information)
  end

  test "should destroy city_information" do
    assert_difference('CityInformation.count', -1) do
      delete city_information_url(@city_information)
    end

    assert_redirected_to city_informations_url
  end
end
