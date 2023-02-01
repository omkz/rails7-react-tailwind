Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :products
    end
  end
end
