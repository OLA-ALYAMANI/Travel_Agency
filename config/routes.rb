Rails.application.routes.draw do

  resources :orders
  get 'users/index'
  get 'users/create'
  get 'users/show'
  post 'users/signup', to: 'users#create'
  post '/auth/login', to: 'authentication#login'

  
  resources :city_informations do
    resources :places
  end
  resources :places
  resources :packages

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  #root path localhost:3000 --> render javascript/packs/hello_react.jsx
  root 'city_informations#index'
  # root 'orders#index'


  # API axios.get
  get 'city_information',to: 'city_informations#displayAllCity'
  get 'place',to: 'places#index'
  get 'package', to: 'packages#index'
  get 'orderList', to: 'orders#index'
  
  # API axios.post
  post 'orderCreate' , to: 'orders#create'

  # API axios.delete
  delete 'orderDelete', to: 'orders#destroy'

  #test API axios.post
  post 'place2',to: 'places#create'
  post 'city_information2', to: 'city_informations#create'
  

  
end
