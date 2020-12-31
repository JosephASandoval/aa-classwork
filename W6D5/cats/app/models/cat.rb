require 'action_view'
include ActionView::Helpers::DateHelper

class Cat < ApplicationRecord
  validates :color, presence: true
  validates :sex, presence: true

  def age
    time_ago_in_words(self.birth_date)
  end

end
