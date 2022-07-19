Rails.application.routes.draw do
  root to: 'pages#home'
  resources :pages, only: [:home] do
    resources :contacts, only: [:new, :create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
