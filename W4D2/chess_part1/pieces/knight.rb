class Knight < Piece
  include Stepable

  def symbol
    if color == :white
      :♞
    else
      :♘
    end
  end

  def move_diffs
    [
      [1, 2],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]
  end

  
end