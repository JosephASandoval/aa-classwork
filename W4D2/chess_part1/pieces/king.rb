class King < Piece

  include Stepable

  def symbol
    if color == :white
      :♚
    else
      :♔
    end
  end



  
end