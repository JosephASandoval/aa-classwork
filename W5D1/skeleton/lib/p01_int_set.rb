require "byebug"


class MaxIntSet
  attr_reader :store

  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    # debugger
    raise "Out of bounds" if num > @store.length || num < 0
    @store[num] = true
    true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    return false unless @store[num] 
    true
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    return true if self[num].include?(num)
    false
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def inspect
    @store
  end

  def insert(num)
    # debugger
    self[num] << num unless self[num].include?(num)
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    return true if self[num].include?(num)
    false    
  end

  def count
    count = 0
    @store.each do |bucket|
      bucket.each do |el|
        count += 1
      end
    end
    return count
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    debugger
    s = "s"
  #   if count == num_buckets
  #     num_buckets *= 2
  #     arr = Array.new(num_buckets) {Array.new}
  #     @store.each do |bucket|
  #       bucket.each do |el|
  #         arr[num % num_buckets] << num unless arr[num % num_buckets].include?(num)
  #       end
  #     end
  #     @store = arr
  #   end
  #   @store
  end
end
