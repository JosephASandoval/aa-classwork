require 'rspec'
require 'first_tdd_projects'

describe '#my_uniq' do
  it "returns an array with uniq elements of input" do 
    arr = [1,2,3,4,5,5,5,5,5]
    uniq = arr.uniq
    
    expect(my_uniq(arr)).to eq(uniq)

  end

end