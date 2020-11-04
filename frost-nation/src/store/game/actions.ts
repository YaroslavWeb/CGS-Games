import * as actionsTypes from "./actionsTypes"

export const movePlayer = (cell: number) => ({
  type: actionsTypes.MOVE_PLAYER,
  payload: cell,
})

export const nextTurn = () => ({
  type: actionsTypes.NEXT_TURN,
})
