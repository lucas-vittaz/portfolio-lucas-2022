Rails.application.routes.draw do
  root to: 'pages#home'
  post 'contact' => 'pages#create'
end
