class Queen < Piece

  include Slideable

  def symbol
    if color == :white
      :♛
    else
      :♕
    end
  end


  
end