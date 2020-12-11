
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

#O(n^2)
def second_anagram?(first_str, second_str)
    first_str.each_char.with_index do |ele, i|
        idx = second_str.index(ele)
        second_str[idx] = "" unless idx.nil?
    end
    return true if second_str.length == 0
    false
end

# p second_anagram?("gizmogizmo", "sallysally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true
