class Piece
    attr_reader :color
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
    attr_accessor :pos


end