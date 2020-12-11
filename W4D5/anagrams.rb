
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

