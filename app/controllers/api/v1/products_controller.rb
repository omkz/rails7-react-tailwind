module Api
  module V1
    class ProductsController < ApplicationController
      def index
        products = Product.all
        render json: products
      end

      private

      def post_params
        params.require(:product).permit(:title, :content)
      end
    end
  end
end
