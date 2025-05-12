import { adjacency } from "./adjacency";

describe("Adjacency Definitions", () => {
  const roomIds = Object.keys(adjacency);

  it("should have expected number of definitions", () => {
    expect(roomIds.length).toEqual(38);

    roomIds.forEach((key) => {
      const rooms = adjacency[key];
      expect(rooms.length).toBeGreaterThan(3);
    });
  });

  it("should have a reverse adjacency definition for each room", () => {
    roomIds.forEach((originalRoomId) => {
      const exits = adjacency[originalRoomId];

      exits.forEach((rId) => {
        const reverseAdjacency = adjacency[String(rId)];

        expect(reverseAdjacency).toContain<number>(Number(originalRoomId));
      });
    });
  });
});
