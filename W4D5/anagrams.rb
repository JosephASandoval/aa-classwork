
# O(n!)
def first_anagram?(first_str, second_str)
  permutations = first_str.split("").permutation.to_a

  permutations.each do |ele|
    return true if ele == second_str.split("")
  end
  false
end

# p first_anagram?("gizmoasds", "sallyasdf")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

#O(n * m)
def second_anagram?(first_str, second_str)
    first_str.each_char.with_index do |ele, i| # n * m
        idx = second_str.index(ele)
        second_str[idx] = "" unless idx.nil?
    end
    return true if second_str.length == 0
    false
end

# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true

#O(nlogn + mlogm)
def third_anagram?(first_str, second_str)
  first_sorted = first_str.chars.sort # n + nlogn
  second_sorted = second_str.chars.sort # m + mlogm
  first_sorted == second_sorted
end

# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true

# O(n + m)
def fourth_anagram?(first_str, second_str)
  first_count = Hash.new(0)
  second_count = Hash.new(0)
  first_str.each_char { |char| first_count[char] += 1 } # n
  second_str.each_char { |char| second_count[char] += 1 } # m
  first_count == second_count




# O(n)
  anagram = true
  count = Hash.new(0)
  first_str.each_char { |char| count["first_#{char}"] += 1 }
  second_str.each_char { |char| count["second_#{char}"] += 1 }
  first_str.each_char do |char|
    anagram = false unless count["first_#{char}"] == count["second_#{char}"]
  end
  anagram
end

# p fourth_anagram?("gizmo", "sally")    #=> false
# p fourth_anagram?("elvis", "lives")    #=> true