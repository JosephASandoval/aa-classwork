require 'rspec'
require 'first_tdd_projects'

describe '#my_uniq' do
  it "returns an array with uniq elements of input" do 
    arr = [1,2,3,4,5,5,5,5,5]
    uniq = arr.uniq
    
    expect(my_uniq(arr)).to eq(uniq)

  end
end

describe "Array#two_sum" do
  it "finds all pairs of positions where the elements at those positions sum to zero" do
    arr = [-1, 0, 2, -2, 1]
    expect(arr.two_sum).to eq([[0, 4], [2, 3]])
  end
end

describe "#my_transpose" do
  it "transepose a 2D-array" do
    arr = [[0, 1, 2], [3, 4, 5],[6, 7, 8]]
    cols = [[0, 3, 6],[1, 4, 7],[2, 5, 8]]
    expect(my_transpose(arr)).to eq(cols)
  end
end