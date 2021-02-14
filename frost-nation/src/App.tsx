import React from "react"
import SnowStorm from "react-snowstorm"
import { block } from "bem-cn"

import { ReactComponent as PlayerIcon } from "assets/icons/player.svg"
import { ReactComponent as EventIcon } from "assets/icons/event.svg"
import { ReactComponent as BuildingIcon } from "assets/icons/building.svg"
import { ReactComponent as BarIcon } from "assets/icons/bar.svg"

import { IBoard, IPlayer } from "interfaces"
import { useOvermind } from "store"
import { Status } from "containers/Status"
import { getCellPosition } from "utils"

import "App.scss"

const className = block("board")

function App() {
  const { state, actions } = useOvermind()
  const { players, environment, board, turn } = state

  const getCellStyles = (cell: number) => {
    const pl = players.find((player) => player.position === cell)
    if (pl) {
      return getCellPosition(cell, pl.color)
    }

    const plPlace = players[turn - 1].position
    const plEndur = players[turn - 1].chars.endurance
    if (
      Math.abs(cell - plPlace) <= plEndur ||
      plPlace + plEndur >= 24 + cell ||
      plPlace - plEndur <= cell - 24
    ) {
      return getCellPosition(cell, players[turn - 1].colorSecond)
    }
  }

  const handleMovePlayer = (cell: number) => {
    actions.movePlayer(cell)
  }
  return (
    <div className="App">
      <div className="game">
        <div className={className()}>
          {board.map((row: IBoard[], idx: number) =>
            row.map((cell: IBoard, jdx: number) => {
              if (cell.number !== 0) {
                return (
                  <div
                    key={idx + jdx}
                    className={className("cell")}
                    style={getCellStyles(cell.number)}
                    onClick={() => handleMovePlayer(cell.number)}
                  >
                    <span style={{ position: "absolute", top: 0, left: 0 }}>
                      {cell.number}
                    </span>
                    {cell.type === "event" ? (
                      <EventIcon className={className("icon")} />
                    ) : cell.type === "building" ? (
                      <BuildingIcon className={className("icon")} />
                    ) : cell.type === "bar" ? (
                      <BarIcon className={className("icon")} />
                    ) : null}
                    {players.map((player: IPlayer) => {
                      if (player.position === cell.number) {
                        return (
                          <PlayerIcon
                            key={player.id}
                            style={{
                              color: player.color,
                              zIndex: 2,
                              width: "55%",
                              height: "55%",
                            }}
                          />
                        )
                      } else return null
                    })}
                  </div>
                )
              } else return null
            })
          )}
          <div className="board__info"></div>
        </div>
        <Status player={players[turn - 1]} environment={environment} />
      </div>
      <SnowStorm flakesMax={24} flakesMaxActive={12} vMaxY={1} vMaxX={0} />
    </div>
  )
}

export default App
