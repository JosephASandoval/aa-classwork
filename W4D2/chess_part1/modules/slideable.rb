module Slideable

  
  def horizontal_dirs
    
  end
  
  def diagonal_dirs
    
  end
  
  def moves
    possible_moves = []
    if move_dirs == :diagonal
      possible_moves += diagonal_dirs
    elsif move_dirs == :horizontal
      possible_moves += horizontal_dirs
    else
      possible_moves += diagonal_dirs
      possible_moves += horizontal_dirs
    end
    possible_moves
  end


  private

  HORIZONTAL_DIRS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  DIAGONAL_DIRS = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]

  def grow_unblocked_moves_in_dir(dx, dy)

  end

end