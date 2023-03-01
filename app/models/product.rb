class Product < ApplicationRecord
  belongs_to :user
  has_one_attached :image

  validates :price, presence: true
  validates :title, presence: true

  def image_url
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end

end
