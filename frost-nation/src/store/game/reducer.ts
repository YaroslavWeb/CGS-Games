import { IGame, IAction } from "interfaces"
import { board, players, environment } from "utils"

import * as actionsTypes from "./actionsTypes"

const initialState: IGame = {
  board,
  turn: 1,
  players,
  environment,
}

export const gameReducer = (state: IGame = initialState, action: IAction) => {
  switch (action.type) {
    case actionsTypes.MOVE_PLAYER: {
      const pl = state.players[state.turn - 1]
      const plPlace = pl.position
      const plEndur = pl.chars.endurance
      const cell = action.payload.cell

      if (
        Math.abs(cell - plPlace) <= plEndur ||
        plPlace + plEndur >= 24 + cell ||
        (plPlace - plEndur <= cell - 24 && cell !== plPlace)
      ) {
        state.players[state.turn - 1].position = cell
        state.players[state.turn - 1].waiting = true
      }
      return state
    }

    case actionsTypes.NEXT_TURN: {
      return {
        ...state,
        turn: (state.turn % state.players.length) + 1,
      }
    }
    default:
      return state
  }
}
