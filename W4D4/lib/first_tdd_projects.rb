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
  new_arr = []

  (0...arr.length)

  # (0...arr.length).each do |i|
  #   sub_arr = [arr[i]]
  #   arr.each do |row|
  #     sub_arr << row[i]
  #   end
  #   new_arr << sub_arr
  # end
  new_arr
end