module Api
  module V1
    class ProductsController < ApplicationController
      before_action :set_product, only: [:show, :destroy]

      def index
        products = Product.all
        render json: products
      end

      def create
        @product = Product.new(product_params)
        if @product.save
          render json: @product, status: :created, location: api_v1_product_url(@product)
        else
          render json: @product.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @product&.destroy
        render json: { message: 'product deleted!' }
      end

      private

      def product_params
        params.require(:product).permit(:title, :price)
      end

      def set_product
        @product = Product.find(params[:id])
      end
    end
  end
end
