require 'byebug'

class Hanoi
  attr_accessor :piles

  def initialize
    @piles = [[3, 2, 1], [], []] # [[3, 2],[],[1]]
  end

  def move(start_pile, end_pile)
    disk = @piles[start_pile].pop
    @piles[end_pile] << disk
  end

  def valid_move?(start_pile, end_pile)
    return false unless [start_pile, end_pile].all? { |i| [0, 1, 2].include?(i) }
    return false if @piles[start_pile].empty?

    disk1 = @piles[start_pile].last
    disk2 = @piles[end_pile].last
    disk2 ||= 4
    return false if disk1 > disk2

    true
  end

  def won?
    return true if @piles == [[], [], [3, 2, 1]]
    false
  end

  def render
    out = Array.new(3){Array.new(3)}
    (0...3).each do |i|
      (0...3).each do |j|
        ele = @piles[i][j]
        ele ||= "*"
        out[j][i] = ele
      end
    end
    out.reverse.each do |row|
      puts row.join("   ")
    end
  end

  def gets_input
    puts "Please Enter Your Move (two numbers with a pace in between i.e. 1 2"
    input = gets.chomp.split.map {|ele| ele.to_i}
    input
  end

  def play
    until self.won?
      render
      start_pile, end_pile = gets_input
      if valid_move?(start_pile, end_pile)
        self.move(start_pile, end_pile)  
        next
      else
        puts "invalid, try again"
        next
      end
    end

    puts "Congrats, You Won!"
  end
end
