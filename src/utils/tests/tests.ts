import { arraysEqual } from "../arraysEqual";
import { listToMatrix } from "../listToMatrix";
import { shuffleArray } from "../shuffleArray";

test("arraysEqual is true", () => {
  expect(arraysEqual([1], [1])).toBe(true);
});

test("arraysEqual is false", () => {
  expect(arraysEqual([1, 3], [1, 2])).toBe(false);
});

test("listToMatrix returns a matrix", () => {
  expect(listToMatrix([1, 2, 3, 4], 2)).toBe([
    [1, 3],
    [2, 4],
  ]);
});

test("shuffleArray does not return an identical array", () => {
  expect(shuffleArray([1, 2, 3, 4])).not.toBe([1, 2, 3, 4]);
});
