import { Action } from "overmind"

export const movePlayer: Action<number> = ({ state }, numberCell) => {
  const pl = state.players[state.turn - 1]
  const plPos = pl.position
  const plEndur = pl.chars.endurance
  if (
    (Math.abs(numberCell - plPos) <= plEndur ||
      plPos + plEndur >= 24 + numberCell ||
      plPos - plEndur <= numberCell - 24) &&
    numberCell !== plPos
  ) {
    state.players[state.turn - 1].position = numberCell
    state.turn = (state.turn % state.players.length) + 1
    state.environment.duration += 1
  }
}

// currentIdx = номер элемента который взяли
// nextIdx = номер элемента на который положили
export const dragItem: Action<{ currentIdx: number; nextIdx: number }> = (
  { state },
  { currentIdx, nextIdx }
) => {
  const belt = state.players[state.turn - 1].inventory.belt
  state.players[state.turn - 1].inventory.belt.splice(
    nextIdx,
    1,
    belt[currentIdx]
  )
}
