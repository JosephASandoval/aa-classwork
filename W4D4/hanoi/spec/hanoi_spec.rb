require "rspec"
require "hanoi"

describe Hanoi do
  subject(:hanoi) { Hanoi.new }
  describe "#initialize" do
    it "creates starting piles with 3 disks on the left most pile" do
      expect(hanoi.piles).to eq([[3, 2, 1],[],[]])
    end
  end

  describe

end