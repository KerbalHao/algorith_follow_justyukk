/**
 * 两数之和的三种方法
 * @param {Array<number>} nums
 * @param {Number} target
 * @return {Array} 返回两数的索引的数组
 */

// 1 哈希表
function twoSumHash(nums, target) {
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]] !== undefined) {
      return [result[nums[i]], i];
    }
    result[target - nums[i]] = i;
  }
}

// 2 暴力枚举
function twoSumIterate(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// 3. 双指针（适合求值，不适合求索引）
function twoSumPointer(nums, target) {
  let pL = 0,
    pR = nums.length - 1,
    n = nums.sort((a, b) => a - b),
    t = target;
  while (pL < pR) {
    if (n[pL] + n[pR] < t) {
      pl++;
    } else if (n[pL] + n[pR] > t) {
      pR--;
    } else {
      return [pL, pR];
    }
  }
}
