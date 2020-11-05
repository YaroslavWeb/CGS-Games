import React from "react"
import { block } from "bem-cn"

import { IPlayer } from "interfaces"
import "./styles.scss"

const BEM = block("belt")

interface BeltProps {
  player: IPlayer
}

export function Belt({ player }: BeltProps) {
  return (
    <div className={BEM()}>
      <span className={BEM("label")}>Пояс</span>
      <div className={BEM("container")}>
        {[...Array(player.inventory.capacityBelt)].map((_, idx) => (
          <div className={BEM("box")} key={idx}>
            {idx}
          </div>
        ))}
      </div>
    </div>
  )
}
