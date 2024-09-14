export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const result: boolean[] = [];
    const max = Math.max(...candies);

    for (const candy of candies) {
        result.push(candy + extraCandies >= max);
    }

    return result;
}