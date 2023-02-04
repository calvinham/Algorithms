export default function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>(nums);
  return set.size !== nums.length
};

export function containsDuplicate2(nums: number[]): boolean {
  const set = new Set<number>();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;
}
