# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_07_205827) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "city_informations", force: :cascade do |t|
    t.string "image"
    t.string "city_name"
    t.text "city_about"
    t.float "lat"
    t.float "lng"
    t.float "living_cost"
    t.string "best_time_visit"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "city_infos", force: :cascade do |t|
    t.string "city_name"
    t.string "city_about"
    t.string "city_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "packages", force: :cascade do |t|
    t.text "destination"
    t.string "flight"
    t.integer "hotel"
    t.text "plan"
    t.float "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "places", force: :cascade do |t|
    t.string "image"
    t.string "place"
    t.text "description"
    t.bigint "city_information_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["city_information_id"], name: "index_places_on_city_information_id"
  end

  add_foreign_key "places", "city_informations"
end
