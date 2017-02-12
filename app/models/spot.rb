class Spot < ApplicationRecord
  belongs_to :user
  has_many :users, through: :entries
  has_many :entries
end
