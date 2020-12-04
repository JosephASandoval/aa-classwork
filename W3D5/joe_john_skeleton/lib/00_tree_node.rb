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

end




@f = PolyTreeNode.new("f")
@g = PolyTreeNode.new("e")
@d = PolyTreeNode.new("d")
@e = PolyTreeNode.new("e")
@b = PolyTreeNode.new("b", [@d, @e])
@c = PolyTreeNode.new("c", [@f, @g])
@a = PolyTreeNode.new("a", [@b, @c])


# tree = [a, [b, [d, e], c, [f, g]]]