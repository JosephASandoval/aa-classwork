require_relative "board.rb"

class Piece
    
    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end
    
    def to_s
        
        
    end
    
    def pos=(val)
        pos = val
    end

    private
    attr_writer :pos


end