import { hasPathBetween } from "./path";

describe("Path functions", () => {
  describe("hasPathBetween", () => {
    it("returns false for empty values", () => {
      expect(hasPathBetween(0, 1, [])).toEqual(false);
    });

    it("returns true if the start and destination are the same", () => {
      expect(hasPathBetween(1, 1, [])).toEqual(true);
    });

    it("returns false if the edges do not connect the rooms", () => {
      expect(
        hasPathBetween(1, 4, [
          [1, 2],
          [3, 4],
        ])
      ).toEqual(false);
    });

    it("returns true for a trivial two-room graph", () => {
      expect(hasPathBetween(1, 2, [[1, 2]])).toEqual(true);
    });

    it("returns true if the edges do connect the rooms", () => {
      expect(
        hasPathBetween(1, 4, [
          [1, 2],
          [1, 3],
          [2, 4],
        ])
      ).toEqual(true);
    });

    it("returns true for a larger example", () => {
      expect(
        hasPathBetween(1, 7, [
          [1, 2],
          [1, 3],
          [1, 4],
          [4, 2],
          [4, 5],
          [5, 3],
          [5, 6],
          [6, 1],
          [6, 2],
          [6, 3],
          [6, 7],
        ])
      ).toEqual(true);
    });
  });
});
