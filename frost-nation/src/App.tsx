import React, { useEffect, useState } from "react"
import { block } from "bem-cn"
import SnowStorm from "react-snowstorm"

import { ReactComponent as PlayerIcon } from "assets/icons/player.svg"
import { ReactComponent as EventIcon } from "assets/icons/event.svg"
import { ReactComponent as BuildingIcon } from "assets/icons/building.svg"
import { ReactComponent as BarIcon } from "assets/icons/bar.svg"
import { Status } from "containers/Status"
import * as config from "utils"
import { IBoard, IEnvironment, IPlayer } from "interfaces"
import "App.scss"

const BEMboard = block("board")

function App() {
  const [gameStarted, setGameStarted] = useState<boolean>(false)
  const [environment, setEnvironment] = useState<IEnvironment>(
    config.environment
  )
  const [players, setPlayers] = useState<IPlayer[]>(config.players)
  const [turn, setTurn] = useState<number>(1)
  const [gameBoard, setGameBoard] = useState<IBoard[][]>(config.board)

  useEffect(() => {
    setGameStarted(true)
  }, [])

  const nextTurn = () => {
    setTurn((prev) => (prev % players.length) + 1)
  }

  const getCellStyles = (cell: number) => {
    const pl = players.find((player) => player.position === cell)
    if (pl) {
      return config.getCellPosition(cell, pl.color)
    }

    const plPlace = players[turn - 1].position
    const plEndur = players[turn - 1].chars.endurance
    if (
      Math.abs(cell - plPlace) <= plEndur ||
      plPlace + plEndur >= 24 + cell ||
      plPlace - plEndur <= cell - 24
    ) {
      return config.getCellPosition(cell, players[turn - 1].colorSecond)
    }
  }

  const movePlayer = (cell: number) => {
    const plPlace = players[turn - 1].position
    const plEndur = players[turn - 1].chars.endurance
    if (cell === plPlace) {
      console.log("я тут")
    } else if (
      Math.abs(cell - plPlace) <= plEndur ||
      plPlace + plEndur >= 24 + cell ||
      plPlace - plEndur <= cell - 24
    ) {
      setPlayers((prev) => {
        prev[turn - 1].position = cell
        return prev
      })
      nextTurn()
    } else {
      console.log("слишком далеко")
    }
  }

  return (
    <div className="App">
      <div className="game">
        <div className={BEMboard()}>
          {gameBoard.map((row: IBoard[], idx: number) =>
            row.map((cell: IBoard, jdx: number) => {
              if (cell.number !== 0) {
                return (
                  <div
                    key={idx + jdx}
                    className={BEMboard("cell")}
                    style={getCellStyles(cell.number)}
                    onClick={() => movePlayer(cell.number)}
                  >
                    <span style={{ position: "absolute", top: 0, left: 0 }}>
                      {cell.number}
                    </span>
                    {cell.type === "event" ? (
                      <EventIcon className={BEMboard("icon")} />
                    ) : cell.type === "building" ? (
                      <BuildingIcon className={BEMboard("icon")} />
                    ) : cell.type === "bar" ? (
                      <BarIcon className={BEMboard("icon")} />
                    ) : null}
                    {players.map((player) => {
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
