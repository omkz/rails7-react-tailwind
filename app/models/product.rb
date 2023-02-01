class Product < ApplicationRecord
  belongs_to :user

  validates :price, presence: true
  validates :title, presence: true

end
