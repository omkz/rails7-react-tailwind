module Api
  module V1
    class ProductsController < ApplicationController
      before_action :set_product, only: [:show, :destroy]

      def index
        products = Product.all
        render json: products
      end

      def destroy
        @product&.destroy
        render json: { message: 'product deleted!' }
      end

      private

      def product_params
        params.require(:product).permit(:title, :content)
      end

      def set_product
        @product = Product.find(params[:id])
      end
    end
  end
end
