import React, { useState } from "react"
import { block } from "bem-cn"

import { ProgressBar } from "components/ProgressBar"
import { BottomPanel } from "./components/BottomPanel"
import { IEnvironment, IPlayer } from "interfaces"
import "./styles.scss"

const BEM = block("status")

interface StatusProps {
  player: IPlayer
  environment: IEnvironment
}

export function Status({ player, environment }: StatusProps) {
  const [isBackpack, setBackpack] = useState<boolean>(false)
  const [isCompass, setCompass] = useState<boolean>(false)

  const handleBackpack = () => setBackpack((prev) => !prev)
  const handleCompass = () => setCompass((prev) => !prev)

  return (
    <div className={BEM()}>
      <div className={BEM("state")}>
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
      <div className={BEM("content")}>Content</div>
      <BottomPanel
        player={player}
        handleBackpack={handleBackpack}
        handleCompass={handleCompass}
        isBackpack={isBackpack}
        isCompass={isCompass}
      />
    </div>
  )
}
