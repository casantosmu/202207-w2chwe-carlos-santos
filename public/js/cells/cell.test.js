import { getCellNextStatus } from "./cell.js";

describe("Given a getCellNextStatus function", () => {
  describe("When its called and it receives a 6x6 grid with true, false, false, true, true, false, false, false, true, true, false, false, true, true, false, true, true, false, false, true, false, false, false, true, false, true, false, false, true, false, true, false, true, true, false, false", () => {
    describe("Also recive 0 row position and 0 column position", () => {
      test("Then it should return false", () => {
        const rowPosition = 0;
        const columnPosition = 0;
        const cellsBoard = [
          [true, false, false, true, true, false],
          [false, false, true, true, false, false],
          [true, true, false, true, true, false],
          [false, true, false, false, false, true],
          [false, true, false, false, true, false],
          [true, false, true, true, false, false],
        ];
        const expectedBoolean = false;

        const result = getCellNextStatus(
          cellsBoard,
          rowPosition,
          columnPosition
        );

        expect(result).toBe(expectedBoolean);
      });
    });

    describe("Also recive 4 row position and 3 column position", () => {
      test("Then it should return true", () => {
        const rowPosition = 4;
        const columnPosition = 3;
        const cellsBoard = [
          [true, false, false, true, true, false],
          [false, false, true, true, false, false],
          [true, true, false, true, true, false],
          [false, true, false, false, false, true],
          [false, true, false, false, true, false],
          [true, false, true, true, false, false],
        ];
        const expectedBoolean = true;

        const result = getCellNextStatus(
          cellsBoard,
          rowPosition,
          columnPosition
        );

        expect(result).toBe(expectedBoolean);
      });
    });

    describe("Also recive 5 row position and 5 column position", () => {
      test("Then it should return false", () => {
        const rowPosition = 5;
        const columnPosition = 5;
        const cellsBoard = [
          [true, false, false, true, true, false],
          [false, false, true, true, false, false],
          [true, true, false, true, true, false],
          [false, true, false, false, false, true],
          [false, true, false, false, true, false],
          [true, false, true, true, false, false],
        ];
        const expectedBoolean = false;

        const result = getCellNextStatus(
          cellsBoard,
          rowPosition,
          columnPosition
        );

        expect(result).toBe(expectedBoolean);
      });
    });

    describe("Also recive 2 row position and 1 column position", () => {
      test("Then it should return true", () => {
        const rowPosition = 2;
        const columnPosition = 1;
        const cellsBoard = [
          [true, false, false, true, true, false],
          [false, false, true, true, false, false],
          [true, true, false, true, true, false],
          [false, true, false, false, false, true],
          [false, true, false, false, true, false],
          [true, false, true, true, false, false],
        ];
        const expectedBoolean = true;

        const result = getCellNextStatus(
          cellsBoard,
          rowPosition,
          columnPosition
        );

        expect(result).toBe(expectedBoolean);
      });
    });
  });
});
