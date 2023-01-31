class Product < ApplicationRecord
  validates :price, presence: true
  validates :title, presence: true
  
end
