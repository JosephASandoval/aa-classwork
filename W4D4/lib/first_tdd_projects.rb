def my_uniq(arr)
  new_arr = []
  arr.each do |ele|
    new_arr << ele unless new_arr.include?(ele)
  end
  new_arr
end

class Array

  def two_sum
    hash = {}
    arr = []
    self.each_with_index do |num, idx|
      if hash.has_key?(-num)
        arr << [hash[-num], idx]
      else
        hash[num] = idx
      end
    end 
    arr.sort
  end
end

def my_transpose(arr)
  num_row = arr.length
  num_col = arr.first.length

  new_arr = Array.new(num_col) { Array.new(num_row) }

  (0...num_row).each do |row|
    (0...num_col).each do |col|
      new_arr[col][row] = arr[row][col]
    end
  end
  new_arr
end

def stock_picker(prices)
  max_profit = 0
  buy_day = 0
  sell_day = 0

  prices.each.with_index
  
end