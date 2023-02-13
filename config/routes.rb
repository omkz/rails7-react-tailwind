Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get "products", to: "products#index"

  namespace :api do
    namespace :v1 do
      get "my_products", to: "users#products"
      resources :products
    end
  end
end
