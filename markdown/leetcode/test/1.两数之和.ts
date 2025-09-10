// # 两数之和

import { describe, it, expect } from "vitest";

// 时间复杂度O(n^2)，空间复杂度O(1)
// 时间复杂度：n是数组中的元素个数。最坏情况下，需要遍历所有可能的数对组合。
// 空间复杂度：O(1)，因为只使用了常数个额外空间。
function twoSum(nums: number[], target: number): number[] {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  throw Error("No solution found.");
}

// 时间复杂度O(n)，空间复杂度O(n)
// 时间复杂度：n是数组中的元素个数。只需要遍历一次数组，对于每个元素查找哈希表的时间都是O(1)。
// 空间复杂度：哈希表最多存储n个元素，因此空间复杂度是O(n)。
function twoSum1(nums: number[], target: number): number[] {
  const map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  throw Error("No solution found.");
}

describe("两数之和", () => {
  let result: unknown;
  let expected: unknown;
  it("测试用例1", () => {
    result = twoSum1([2, 7, 11, 15], 9);
    expected = [0, 1];
    expect(result).eql(expected);
  });

  it("测试用例2", () => {
    result = twoSum1([3, 2, 4], 6);
    expected = [1, 2];
    expect(result).eql(expected);
  });

  it("测试用例3", () => {
    result = twoSum1([3, 3], 6);
    expected = [0, 1];
    expect(result).eql(expected);
  });
});
