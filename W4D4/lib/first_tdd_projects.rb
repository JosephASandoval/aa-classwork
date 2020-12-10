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
  arr = []

  i = 0
  while i < prices.length
    buy_price = prices[i]
    j = i+1
    while j < prices.length
      sell_price = prices[j]
      profit = sell_price - buy_price
      if profit > max_profit
        arr = [i, j]
        max_profit = profit
      end
      j += 1
    end
    i += 1
  end
  arr
end