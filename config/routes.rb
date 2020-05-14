Rails.application.routes.draw do

  resources :orders
  # get 'users/index'
  # get 'users/create'
  # get 'users/show'
  

  
  resources :city_informations do
    resources :places
  end
  resources :places
  resources :packages
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  # API axios.get
  get 'city_information',to: 'city_informations#displayAllCity'
  get 'place',to: 'places#index'
  get 'package', to: 'packages#index'
  get 'orderList', to: 'orders#index'
  get 'users/index'
  get 'users/create'
  get 'users/show'
  # Api axios.get --> to take user_id 
  get '/auth/current_user', to: 'users#user_info'
  # API axios.post
  post 'place2',to: 'places#create'
  post 'city_information2', to: 'city_informations#create'
  post 'users/signup', to: 'users#create'
  post '/auth/login', to: 'authentication#login'
  post 'orderCreate' , to: 'orders#create'

  # API axios.delete
  delete 'orderDelete/:id', to: 'orders#destroy'

  #root path localhost:3000 --> render javascript/packs/hello_react.jsx
  root 'city_informations#index'
  # root 'authentication#current_user'
  get '*path', to:'city_informations#index'
end
