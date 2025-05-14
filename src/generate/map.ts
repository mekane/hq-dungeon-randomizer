import { adjacency } from "../common/adjacency";
import { hasPathBetween } from "./path";

export interface MapLayout {
  mapConfig: Record<string, boolean>;
  path: [number, number][];
}

const defaultLayout: MapLayout = {
  mapConfig: {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
    35: false,
    36: false,
    37: false,
  },
  path: [],
};

export function getRoomLayout(startRoom: number, endRoom: number): MapLayout {
  console.log(`Starting at ${startRoom}`);
  console.log(`Ending at ${endRoom}`);

  let mapCount = 0;
  let generations = 0;
  let satisfactoryMap = false;
  let completePath = false;

  let mapCandidate: MapLayout = { ...defaultLayout };

  while (!satisfactoryMap) {
    mapCount++;
    // reset attempt
    let path: [number, number][] = [];
    let forwardRoom = startRoom;
    let reverseRoom = endRoom;

    while (!completePath) {
      generations++;

      let nextRoom = pickRandomRoom(adjacency[forwardRoom]);
      path.push([forwardRoom, nextRoom]);
      console.log(`  ${forwardRoom} => ${nextRoom}`);
      forwardRoom = nextRoom;

      nextRoom = pickRandomRoom(adjacency[reverseRoom]);
      path.unshift([reverseRoom, nextRoom]);
      console.log(`  ${reverseRoom} => ${nextRoom}`);
      reverseRoom = nextRoom;

      // Create paths if the two ends meet or get close to the goals
      if (adjacent(forwardRoom, reverseRoom)) {
        path.push([forwardRoom, reverseRoom]);
      }

      if (adjacent(forwardRoom, endRoom)) {
        path.push([forwardRoom, endRoom]);
      }

      if (adjacent(startRoom, reverseRoom)) {
        path.push([startRoom, reverseRoom]);
      }

      completePath = hasPathBetween(startRoom, endRoom, path);
    }

    // check for satisfactory map:
    // verify that it's more than 2 rooms total
    // verify that it's less than all the rooms in the quadrant
    // verify that it includes at least one actual room (not just hallways)
    satisfactoryMap = true;

    mapCandidate = { ...defaultLayout, path };
  }

  console.log(`Generated ${mapCount} candidates`);
  console.log(`Took ${generations} total iterations`);

  mapCandidate.path.forEach((r) => {
    mapCandidate.mapConfig[r[0]] = true;
    mapCandidate.mapConfig[r[1]] = true;
  });

  return mapCandidate;
}

function pickRandomRoom(roomList: number[]): number {
  const size = roomList.length;
  const index = Math.floor(Math.random() * size);

  return roomList[index];
}

function adjacent(room1: number, room2: number): boolean {
  return adjacency[room1].includes(room2);
}
