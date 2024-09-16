export function largestAltitude(gain: number[]): number {
    let last = 0;
    let maxAltitude = -Infinity;

    for (const delta of gain) {
        const altitude = last + delta;

        if (altitude > maxAltitude) {
            maxAltitude = altitude;
        }

        last = altitude;
    }

    return Math.max(maxAltitude, 0);
}