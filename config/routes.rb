Dart::Application.routes.draw do

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

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       unit 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
