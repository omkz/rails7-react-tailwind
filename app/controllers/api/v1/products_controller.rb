module Api
  module V1
    class ProductsController < ApplicationController
      before_action :set_product, only: [:show, :destroy]

      def index
        products = current_user.products
        render json: products
      end

      def create
        @product = Product.new(product_params) do |product|
          product.user = current_user
        end
        if @product.save
          render json: @product, status: :created, location: api_v1_product_url(@product)
        else
          render json: @product.errors, status: :unprocessable_entity
        end
      end

      def update
        product = Product.find(params[:id])
        product.update(product_params)
        render json: product
      end

      def destroy
        @product&.destroy
        render json: { message: 'product deleted!' }
      end

      def show
        render json: @product
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
