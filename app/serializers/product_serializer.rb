class ProductSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :price, :image,:image_url, :user
end
