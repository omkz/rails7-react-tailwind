module Api
  module V1
    class UsersController < ApplicationController

      def products
        products = current_user.products
        render json: products
      end
    end
  end
end
