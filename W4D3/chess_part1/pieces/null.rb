require_relative "piece.rb"
require "singleton"

class NullPiece < Piece
  include Singleton

  attr_reader :color, :symbol

  def initialize
    @color = :empty
    @symbol = :null
  end

end