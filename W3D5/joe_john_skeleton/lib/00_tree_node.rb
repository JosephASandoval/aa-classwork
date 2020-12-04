class PolyTreeNode

  attr_reader :parent, :children, :value

  def initialize(value, children = [])
    @value = value
    @parent = nil
    @children = children
  end

  def parent=(node)
    @parent = node
  end


end




f = PolyTreeNode.new("f")
g = PolyTreeNode.new("e")
d = PolyTreeNode.new("d")
e = PolyTreeNode.new("e")
b = PolyTreeNode.new("b", [d, e])
c = PolyTreeNode.new("c", [f, g])
a = PolyTreeNode.new("a", [b, c])

p a


# tree = [a, [b, [d, e], c, [f, g]]]