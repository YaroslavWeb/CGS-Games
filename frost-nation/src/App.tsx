import React, { useEffect, useState } from "react"
import { block } from "bem-cn"
import SnowStorm from "react-snowstorm"

import { ReactComponent as PlayerIcon } from "./assets/player.svg"
import { IPlayer } from "./interfaces"
import "./App.scss"

const BEMboard = block("board")

function App() {
  const [gameStarted, setGameStarted] = useState<Boolean>(false)

  const [players, setPlayers] = useState<IPlayer[]>([
    { id: "1", place: 1, color: "#FFB666", colorSecond: "#F7931E" },
    { id: "2", place: 13, color: "#A284BD", colorSecond: "#8B58BF" },
    // { id: "3", place: 7, color: "#87B9D8", colorSecond: "#70A7D7" },
    // { id: "4", place: 19, color: "#6BCDA1", colorSecond: "#50CC79" },
  ])
  const [turn, setTurn] = useState<number>(1)
  const [game, setGame] = useState<any>({
    board: [
      [1, 2, 3, 4, 5, 6, 7],
      [24, 0, 0, 0, 0, 0, 8],
      [23, 0, 0, 0, 0, 0, 9],
      [22, 0, 0, 0, 0, 0, 10],
      [21, 0, 0, 0, 0, 0, 11],
      [20, 0, 0, 0, 0, 0, 12],
      [19, 18, 17, 16, 15, 14, 13],
    ],
  })

  useEffect(() => {
    setGameStarted(true)
  }, [])

  // TODO: должен возвращать стили
  const getBorderColor = (item: number) =>
    players.find((player) => player.place === item)?.color
  // #262822

  const movePlayer = (cell: number) => {
    setPlayers((prev) => {
      prev[turn - 1].place = cell
      return prev
    })

    setTurn((prev) => (prev % players.length) + 1)
  }
  return (
    <div className="App">
      <div className="game">
        <div className={BEMboard()}>
          {game.board.map((row: number[], idx: string) =>
            row.map((item, jdx) => {
              if (item !== 0) {
                return (
                  <div
                    key={idx + jdx}
                    className={BEMboard("cell")}
                    style={{ borderColor: getBorderColor(item) }}
                    onClick={() => movePlayer(item)}
                  >
                    <span style={{ position: "absolute", top: 0, left: 0 }}>
                      {item}
                    </span>
                    {players.map((player) => {
                      if (player.place === item) {
                        return (
                          <PlayerIcon
                            key={player.id}
                            style={{ color: player.color }}
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
        <div className="status"></div>
      </div>
      <SnowStorm
        flakesMax={64}
        flakesMaxActive={32}
        followMouse={false}
        vMaxY={4}
        vMaxX={4}
      />
    </div>
  )
}

export default App
