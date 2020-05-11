# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# city1=CityInformation.create(image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTd9HArLoXAF-tMpt5GRphm2zJlP6IU7X0s-ov_6e6wn7O9WaVm&usqp=CAU',city_name:'Alula',city_about:'AlUla is a place of extraordinary human and natural heritage',living_cost:150,best_time_visit:'winter')

# city2=CityInformation.create(image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTX-MlywWB6o43hLChKkBZ2Z_tenu_opAccOnRVYwD71BOlenaR&usqp=CAU',city_name:'neom',city_about:'Neom A bold vision. A living laboratory and hub for innovation',living_cost:300,best_time_visit:'summer')

# Place.create(image:'https://lh5.googleusercontent.com/p/AF1QipOatzX5APxyCQ06Y9NDEzsYuMFJDI5e8FlyIPOH=w592-h404-n-k-no',place:'first Alaula museum',description:'place had many old things',city_information:city1)

# Place.create(image:'https://lh5.googleusercontent.com/p/AF1QipOatzX5APxyCQ06Y9NDEzsYuMFJDI5e8FlyIPOH=w592-h404-n-k-no',place:'seond Alaula museum',description:'place had many old things',city_information:city1)
# # Place.create(image:'https://lh5.googleusercontent.com/p/AF1QipOatzX5APxyCQ06Y9NDEzsYuMFJDI5e8FlyIPOH=w592-h404-n-k-no',place:'???',description:'???',city_information:1)
# Place.create(image:'https://lh5.googleusercontent.com/p/AF1QipOatzX5APxyCQ06Y9NDEzsYuMFJDI5e8FlyIPOH=w592-h404-n-k-no',place:'third Alaula museum',description:'place had many old things',city_information:city2)

# Package.create(destination:'jeddah-neom',flight:'king abdulaizi airport',hotel:3,plan:'day1:arriving,day2:lunch',price:3000)
# Package.create(destination:'damam',flight:'king abdullah airport',hotel:2,plan:'day1:arriving,day2:lunch',price:5000)
# Package.create(destination:'Khobar',flight:'king abdulaizi airport',hotel:3,plan:'day1:arriving,day2:lunch',price:7000)
# package11=Package.create(destination:'makkah',flight:'king abdulaizi airport',hotel:3,plan:'day1:arriving,day2:lunch',price:4000)
# User.create(name:'maram',email:'m@g.com',password_digest:'123321')
Order.create(user_id:5,package_id:3,member:23)
