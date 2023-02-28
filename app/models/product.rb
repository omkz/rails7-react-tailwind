class Product < ApplicationRecord
  belongs_to :user
  has_one_attached :image

  validates :price, presence: true
  validates :title, presence: true

end
