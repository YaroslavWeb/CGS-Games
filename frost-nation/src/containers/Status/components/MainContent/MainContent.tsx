import React from "react"
import { block } from "bem-cn"

import { Divider } from "components/Divider"
import { Belt } from "../Belt"
import { Weapon } from "../Weapon"
import { IPlayer } from "interfaces"

import "./styles.scss"

const BEM = block("main-content")

interface MainContentProps {
  player: IPlayer
}

export function MainContent({ player }: MainContentProps) {
  return (
    <div className={BEM()}>
      <Divider />
      <div className={BEM("chars")}>
        <p>
          <span>Выносливость</span>
          <span>{player.chars.endurance}</span>
        </p>
        <p>
          <span>Интеллект</span> <span>{player.chars.intelligence}</span>
        </p>
        <p>
          <span>Ловкость</span> <span>{player.chars.agility}</span>
        </p>
        <p>
          <span>Сила</span>
          <span>{player.chars.strength}</span>
        </p>
      </div>
      <Divider />
      <Belt player={player} />
      <Weapon player={player} />
    </div>
  )
}
