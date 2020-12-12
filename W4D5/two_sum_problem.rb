require "byebug"

#O(n^2)
def bad_two_sum?(arr, target)
    arr.each_with_index do |ele1, i1|
        arr.each_with_index do |ele2, i2|
            if i2 > i1 && ele1 + ele2 == target
                return true
            end
        end
    end
    false
end

# arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false

# O(nlogn) => sorting can make it more efficient
def okay_two_sum?(arr, target)
    arr = arr.sort
    arr.each.with_index do |ele, idx|
        # target_index = arr.rindex(target - ele)
        target_index = arr.bsearch_index { |x| x == target - ele }
        return true if !target_index.nil? && idx != target_index
    end
    false
end

arr = [0, 1, 5, 7]
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 10) # => should be false

#O(n)
def two_sum?(arr, target)
    hash = Hash.new(0)
    arr.each_with_index do |ele, i|
        hash[ele] += 1
        if (target - ele) == ele
            return true if hash[target - ele] == 2
        else
            return true if hash[target - ele] == 1
        end
    end
    false
end

# arr = [0, 1, 5, 7]
# p two_sum?(arr, 6) # => should be true
# p two_sum?(arr, 10) # => should be false