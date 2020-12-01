Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :update, :destroy]
    resources :meditations, only: [:index, :show]
    resources :lists, only: [:index, :show, :create, :update, :destroy]
  end
  
  root "static_pages#root"
end
