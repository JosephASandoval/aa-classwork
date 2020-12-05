class PolyTreeNode

  attr_reader :parent, :children, :value

  def initialize(value, children = [])
    @value = value
    @parent = nil
    @children = children
  end

  def parent=(node)
    if parent
      parent.children.delete(self)
    end
    @parent = node
    node.children << self if self.parent != nil
    return if self.parent == node
  end

  def add_child(child_node)
    child_node.parent=(self)
  end

  def remove_child(child_node)
    raise "Error" if !self.children.include?(child_node)
    child_node.parent=(nil)
  end

  def dfs(target_value=nil, &prc)
    prc ||= Proc.new { |node| node.value == target_value }
    #1st check if current_node == node
    return self if prc.call(self)
    #2nd memoize the current_node = holding visited nodes in an array
    self.children.each do |child|
      #p child.value
      result = child.dfs(&prc)
      return result if !result.nil?
    end
    #3rd call dfs on first (leftmost child) if child has children 
    #4th return result
    #5 if we ran through entire tree and did not find target, return nil
    nil
  end

  def bfs(target_value)
    return self if self.value == target_value
    
  end
end

@f = PolyTreeNode.new("f")
@g = PolyTreeNode.new("e")
@d = PolyTreeNode.new("d")
@e = PolyTreeNode.new("e")
@b = PolyTreeNode.new("b", [@d, @e])
@c = PolyTreeNode.new("c", [@f, @g])
@a = PolyTreeNode.new("a", [@b, @c])


#         @a
#     @b      @c
#   @d  @e  @f  @g
# find "f"
#   [a, c, f]
