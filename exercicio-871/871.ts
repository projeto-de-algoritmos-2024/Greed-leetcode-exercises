function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {
    // armazenar o combustível 
    const maxHeap: number[] = [];

    let fuel = startFuel; 
    let stops = 0;       
    let prevPosition = 0; 

    stations.push([target, 0]);
    // itera em cada posto e checa se precisa abastecer
    for (const [position, fuelAtStation] of stations) {
        const distance = position - prevPosition;
        fuel -= distance;

        while (fuel < 0 && maxHeap.length > 0) {
            fuel += -maxHeap.shift()!;
            stops++;
        }

        if (fuel < 0) {
            return -1;
        }

        maxHeap.push(-fuelAtStation);
        maxHeap.sort((a, b) => a - b); 
        prevPosition = position;
    }

    return stops;
}

// console.log(minRefuelStops(1, 1, [])); 
// console.log(minRefuelStops(100, 1, [[10, 100]])); 
// console.log(minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]])); 
