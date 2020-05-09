json.extract! city_information, :id, :image, :city_name, :city_about, :lat, :lng, :living_cost, :best_time_visit, :created_at, :updated_at
json.url city_information_url(city_information, format: :json)
