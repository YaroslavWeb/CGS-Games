import { IBoard } from "interfaces"

export const board: IBoard[][] = [
  [
    { number: 1, type: "spawn" },
    { number: 2, type: "event" },
    { number: 3, type: "building" },
    { number: 4, type: "bar" },
    { number: 5, type: "building" },
    { number: 6, type: "event" },
    { number: 7, type: "spawn" },
  ],
  [
    { number: 24, type: "event" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 8, type: "event" },
  ],
  [
    { number: 23, type: "building" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 9, type: "building" },
  ],
  [
    { number: 22, type: "bar" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 10, type: "bar" },
  ],
  [
    { number: 21, type: "building" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 11, type: "building" },
  ],
  [
    { number: 20, type: "event" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 0, type: "empty" },
    { number: 12, type: "event" },
  ],
  [
    { number: 19, type: "spawn" },
    { number: 18, type: "event" },
    { number: 17, type: "building" },
    { number: 16, type: "bar" },
    { number: 15, type: "building" },
    { number: 14, type: "event" },
    { number: 13, type: "spawn" },
  ],
]

export const getCellPosition = (cell: number, color: string) => {
  const borderWidth = 8
  if (cell === 1) {
    return {
      borderTopColor: color,
      borderLeftColor: color,
      borderTopWidth: borderWidth,
      borderLeftWidth: borderWidth,
    }
  }
  if (cell > 1 && cell < 7) {
    return {
      borderTopColor: color,
      borderTopWidth: borderWidth,
    }
  }
  if (cell === 7) {
    return {
      borderTopColor: color,
      borderRightColor: color,
      borderTopWidth: borderWidth,
      borderRightWidth: borderWidth,
    }
  }
  if (cell > 7 && cell < 13) {
    return {
      borderRightColor: color,
      borderRightWidth: borderWidth,
    }
  }
  if (cell === 13) {
    return {
      borderBottomColor: color,
      borderRightColor: color,
      borderBottomWidth: borderWidth,
      borderRightWidth: borderWidth,
    }
  }
  if (cell > 13 && cell < 19) {
    return {
      borderBottomColor: color,
      borderBottomWidth: borderWidth,
    }
  }
  if (cell === 19) {
    return {
      borderBottomColor: color,
      borderLeftColor: color,
      borderBottomWidth: borderWidth,
      borderLeftWidth: borderWidth,
    }
  }
  return {
    borderLeftColor: color,
    borderLeftWidth: borderWidth,
  }
}
