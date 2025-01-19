function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) return 0;

    // ordena pelo tempo de termino
    intervals.sort((a, b) => a[1] - b[1]);

    let nonOverlappingCount = 0;
    let lastEnd = -Infinity;

    for (const [start, end] of intervals) {
        if (start >= lastEnd) {
            lastEnd = end;
        } else {
            nonOverlappingCount++;
        }
    }

    return nonOverlappingCount;
}

// console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); 
// console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); 
// console.log(eraseOverlapIntervals([[1, 2], [2, 3]]));
