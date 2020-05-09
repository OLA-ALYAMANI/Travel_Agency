require "application_system_test_case"

class CityInformationsTest < ApplicationSystemTestCase
  setup do
    @city_information = city_informations(:one)
  end

  test "visiting the index" do
    visit city_informations_url
    assert_selector "h1", text: "City Informations"
  end

  test "creating a City information" do
    visit city_informations_url
    click_on "New City Information"

    fill_in "Best time visit", with: @city_information.best_time_visit
    fill_in "City about", with: @city_information.city_about
    fill_in "City name", with: @city_information.city_name
    fill_in "Image", with: @city_information.image
    fill_in "Lat", with: @city_information.lat
    fill_in "Living cost", with: @city_information.living_cost
    fill_in "Lng", with: @city_information.lng
    click_on "Create City information"

    assert_text "City information was successfully created"
    click_on "Back"
  end

  test "updating a City information" do
    visit city_informations_url
    click_on "Edit", match: :first

    fill_in "Best time visit", with: @city_information.best_time_visit
    fill_in "City about", with: @city_information.city_about
    fill_in "City name", with: @city_information.city_name
    fill_in "Image", with: @city_information.image
    fill_in "Lat", with: @city_information.lat
    fill_in "Living cost", with: @city_information.living_cost
    fill_in "Lng", with: @city_information.lng
    click_on "Update City information"

    assert_text "City information was successfully updated"
    click_on "Back"
  end

  test "destroying a City information" do
    visit city_informations_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "City information was successfully destroyed"
  end
end
