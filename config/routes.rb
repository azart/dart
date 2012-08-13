Dart::Application.routes.draw do
  resources :locations

  resources :orders

  devise_for :users
  match '/language/:lang_cut' => 'welcomes#set_lang'
  match '/unit_images/upload' => 'unit_images#upload'
  match '/unit_images/update/:id/:cover/:preview/:title' => 'unit_images#update'
  match '/unit_images/destroy/:id' => 'unit_images#destroy'
  resources :unit_images

  scope '/:locale', :locale => /en|ru/ do
    #resources :feedbacks
    #resources :unit_images
    #resources :unit_files

    resources :units do
      collection do
        get '/new/:parent_id' => 'units#new'
      end
    end

    resources :welcomes

    match '/access_denied' => 'error#access_denied', :as => :access_denied
    match '/not_found' => 'error#not_found', :as => :not_found

    match '/:short_url' => 'units#show', :as => :unit_by_short_url
  end

  root :to => 'welcomes#index'
end
