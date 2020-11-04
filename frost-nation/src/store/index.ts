import { createStore, combineReducers } from "redux"

import { gameReducer } from "./game/reducer"

const rootReducer = combineReducers({
  game: gameReducer,
})

export const store = createStore(rootReducer)
