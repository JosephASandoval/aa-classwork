require "byebug"

#O(n^2)
def my_min_1(arr)
  arr.each do |ele1|
    smallest = true
    arr.each do |ele2|
      smallest = false if ele2 < ele1
    end
    return ele1 if smallest
  end
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min_1(list)  # =>  -5

#O(n)
def my_min_2(arr)
  smallest = arr[0]
  arr.each { |ele| smallest = ele if ele < smallest }
  smallest
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min_2(list)  # =>  -5


#O(n^3)
def largest_contiguous_subsum_1(arr)
  sub_arr = []

  i = 0
  while i < arr.length
    j = i
    while j < arr.length
      sub_arr << arr[i..j] #slicing = O(n)
      j += 1
    end
    i += 1
  end
  sub_arr.map { |ele| ele.sum }.max
end


# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum_1(list) # => 8 (from [7, -6, 7])

# list = [-5, -1, -3]
# p largest_contiguous_subsum_1(list) # => -1 (from [-1])

#O(n)
def largest_contiguous_subsum_2(arr)
    # debugger
    largest_sum = arr[0]
    current_sum = 0
    arr.each_with_index do |ele, i|
      current_sum = 0 if current_sum < 0
      # largest_sum = ele if ele > largest_sum
      current_sum += ele
      largest_sum = current_sum if current_sum > largest_sum
    end
    largest_sum
end

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum_2(list) # => 8 (from [7, -6, 7])

# list = [-5, -1, -3]
# p largest_contiguous_subsum_2(list) # => -1 (from [-1])