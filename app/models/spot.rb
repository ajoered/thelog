class Spot < ApplicationRecord
  has_many :entries
  has_many :users, through: :entries
  belongs_to :user


end
