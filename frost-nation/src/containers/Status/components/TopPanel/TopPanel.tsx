import React from "react"
import { block } from "bem-cn"

import { IPlayer } from "interfaces"
import { ProgressBar } from "components/ProgressBar"

import "./styles.scss"

const BEM = block("top-panel")

interface TopPanelProps {
  player: IPlayer
}

export function TopPanel({ player }: TopPanelProps) {
  return (
    <div className={BEM()}>
      <img
        alt="avatar"
        style={{ borderColor: player.color }}
        className={BEM("avatar")}
        src="https://via.placeholder.com/500x500"
      />
      <div className={BEM("bars")}>
        <ProgressBar
          currentValue={player.health.currentHealth}
          maxValue={player.health.maxHealth}
          color="health"
          icon="health"
        />
        <ProgressBar
          currentValue={player.armor.currentArmor}
          maxValue={player.armor.maxArmor}
          color="armor"
          icon="armor"
        />
        <ProgressBar
          currentValue={player.hunger.currentHunger}
          maxValue={player.hunger.maxHunger}
          color="hunger"
          icon="hunger"
        />
      </div>
    </div>
  )
}
