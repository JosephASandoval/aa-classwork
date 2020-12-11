
require "byebug"


class Hanoi

  attr_reader :piles

  def initialize
    @piles = [[3, 2, 1],[],[]] #[[3, 2],[],[1]]
  end

  def move(start_pile, end_pile)
    disk = @piles[start_pile].pop
    @piles[end_pile] << disk
  end

  def valid_move?(start_pile, end_pile)
    return false if ![start_pile, end_pile].all? { |i| [0, 1, 2].include?(i) }
    return false if @piles[start_pile].empty?
    disk1 = @piles[start_pile].last
    disk2 = @piles[end_pile].last
    disk2 ||= 4
    return false if disk1 > disk2
    true
  end

end


