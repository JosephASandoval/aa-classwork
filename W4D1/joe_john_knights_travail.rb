
require_relative "00_tree_node.rb"

class KnightPathFinder
    MOVES = [
        [2,1],
        [2,-1],
        [-2,1],
        [-2,-1],
        [1,2],
        [1,-2],
        [-1,2],
        [-1,-2]
    ]
    GRID = Array.new(8) {Array.new(8)}
    def self.valid_moves(pos)
        arr = []
        cx,cy = pos #current
        MOVES.each do |nx, ny| #next
            px, py = [(cx + nx),(cy + ny)] #possible
            if px >= 0 && px <= 7 && py >= 0 && py <= 7
                arr << [px, py]
            end
        end
        arr
    end

    attr_accessor :considered_positions
    def initialize(starting_pos)
        @starting_pos = starting_pos
        @considered_positions = [starting_pos]
        self.build_move_tree
    end

    def new_move_positions(pos)
        arr = []
        KnightPathFinder.valid_moves(pos).each do |p|
            if !@considered_positions.include?(p)
                @considered_positions << p
                arr << p
            end
        end
        arr
    end

    def build_move_tree
        self.root_node = PolyTreeNode.new(@starting_pos)

        queue = [root_node]
    
        until queue.empty?

            queue[0].new_move_positions(queue[0].value).each do |next_pos|
                next_node = PolyTreeNode.new(next_pos)
                queue << next_node
                queue[0].add_child(next_node)
            end
            queue.shift
        end

    end
end
knight = KnightPathFinder.new([1,1])
p KnightPathFinder.valid_moves([1,1])
p knight.considered_positions

