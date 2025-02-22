export function maxArea(height: number[]): number {
    let maxArea = -1;

    for (let left = 0; left < (height.length / 2); left++) {
        const leftEdge = height[left];

        for (let right = height.length - 1; right >= left; --right) {
            const rightEdge = height[right];
            const shortestEdge = Math.min(leftEdge, rightEdge);
            const distance = right - left;

            const area = shortestEdge * distance;

            if (area > maxArea) {
                maxArea = area;
            }
        }
    }

    return maxArea;
}