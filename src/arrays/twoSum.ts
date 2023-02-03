/*
Prompt:
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

Constraints:
  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109
*/

export default function twoSum(nums: number[], target: number): number[] {
    const complements = new Map<number, number>();
    let indicies: number[] = [];
    let complement: number;

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        complement = target - curr;
        if (complements.has(complement)) {
            return [complements.get(complement)!, i];
        }
        complements.set(nums[i], i);
    }
    return indicies;
}
