class ProductSerializer
  include JSONAPI::Serializer
  attributes :id, :price, :image, :created_at, :updated_at
end
