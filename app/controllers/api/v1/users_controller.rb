module Api
  module V1
    class UsersController < ApplicationController

      def products
        products = current_user.products
        render json: ProductSerializer.new(products).serializable_hash[:data]
      end
    end
  end
end
