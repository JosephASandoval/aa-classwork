require "rspec"
require "hanoi"

describe Hanoi do

  subject(:hanoi) { Hanoi.new }

  describe "#initialize" do
    it "creates starting piles with 3 disks on the left most pile" do
      expect(hanoi.piles).to eq([[3, 2, 1],[],[]])
    end
  end

  describe "#move(start_pile, end_pile)" do
    it "moves the top disk on start_pile to the top of end_pile" do
      hanoi.move(0,2)
      expect(hanoi.piles).to eq([[3,2],[],[1]])
    end
  end

  describe "#valid_move?(start_pile, end_pile)" do
    it "checks the validity of the move" do
      hanoi.move(0,2)

      expect(hanoi.valid_move?(0, 2)).to be false
      expect(hanoi.valid_move?(1, 2)).to be false
      expect(hanoi.valid_move?(1, 0)).to be false
      expect(hanoi.valid_move?(0, 1)).to be true
      expect(hanoi.valid_move?(2, 1)).to be true
      expect(hanoi.valid_move?(2, 0)).to be true
      expect(hanoi.valid_move?(3, 0)).to be false
      expect(hanoi.valid_move?(0, 3)).to be false
      expect(hanoi.valid_move?(-3, 0)).to be false
      expect(hanoi.valid_move?(0, -3)).to be false
        
    end
  end


end