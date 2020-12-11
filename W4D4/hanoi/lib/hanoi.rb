class Hanoi
  
  attr_reader :piles

  def initialize
    @piles = [[3, 2, 1],[],[]]
  end

[[3], [2],[1]]

[[],[2],[1,3]] -> invalid
  def move(start_pile, end_pile)
    disk = @piles[start_pile].pop
    @piles[end_pile] << disk
  end
end


## need 3 arrays

