class Tile < ApplicationRecord
  has_and_belongs_to_many :traits
end
