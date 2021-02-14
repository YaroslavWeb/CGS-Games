import { board, environment, players } from "utils"
import { IBoard, IPlayer, IEnvironment } from "interfaces"

type rootState = {
  board: IBoard[][]
  players: IPlayer[]
  environment: IEnvironment
  turn: number
}

export const state: rootState = {
  board,
  players,
  environment,
  turn: 1,
}
