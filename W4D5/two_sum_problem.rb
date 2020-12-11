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

# 
def okay_two_sum?(arr, target)
    arr = arr.sort
    arr.each do |ele|
        return true unless arr.bsearch{ |x| x == (target - ele) }.nil?
    end
    false
end

arr = [0, 1, 5, 7]
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 10) # => should be false