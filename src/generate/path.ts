function getNeighbors(
  currentNode: number,
  edges: [number, number][]
): number[] {
  return edges.filter((e) => e[0] === currentNode).map((e) => e[1]);
}

export function hasPathBetween(
  room1: number,
  room2: number,
  edges: [number, number][]
): boolean {
  console.log(`hasPathBetween(${room1}, ${room2}, ${edges.join(",")})`);

  if (room1 === room2) {
    return true;
  }

  if (!edges || edges.length === 0) {
    return false;
  }

  const toVisit: Set<number> = new Set([room1]);
  const visited: Set<number> = new Set();

  let currentNode = room1;

  let count = 0;
  while (toVisit.size) {
    if (count++ > edges.length * 2) {
      // sanity check
      console.log("SANITY CHECK FAILED in hasPathBetween!");
      return false;
    }

    const neighbors = getNeighbors(currentNode, edges);

    if (visited.has(currentNode)) {
      continue;
    }

    visited.add(currentNode);

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      if (neighbor === room2) {
        return true;
      }

      if (visited.has(neighbor)) {
        continue;
      }

      toVisit.add(neighbor);
    }

    toVisit.delete(currentNode);

    [currentNode] = toVisit;
  }

  return false;
}
