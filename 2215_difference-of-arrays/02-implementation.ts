export function findDifference(nums1: number[], nums2: number[]): number[][] {
    let nums1Map = new Set<number>();
    let nums2Map = new Set<number>();

    let length = Math.max(nums1.length, nums2.length);
    for (let i = 0; i < length; i++) {
        const n1 = nums1[i];
        const n2 = nums2[i];

        if (n1 !== undefined) {
            nums1Map.add(n1);
        }

        if (n2 !== undefined) {
            nums2Map.add(n2);
        }
    }

    let diff1 = Array.from(nums1Map).filter(x => !nums2Map.has(x));
    let diff2 = Array.from(nums2Map).filter(x => !nums1Map.has(x));

    return [diff1, diff2];
}
