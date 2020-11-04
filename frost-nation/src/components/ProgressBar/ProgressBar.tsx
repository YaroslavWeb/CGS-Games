import React, { ReactNode, useState } from "react"
import { block } from "bem-cn"

import { ReactComponent as HealthIcon } from "assets/icons/hp.svg"
import { ReactComponent as ArmorIcon } from "assets/icons/armor.svg"
import { ReactComponent as HungerIcon } from "assets/icons/hunger.svg"
import "./styles.scss"

const BEM = block("progress-bar")

interface ProgressBarProps {
  currentValue: number
  maxValue: number
  color: "health" | "armor" | "hunger"
  icon?: "health" | "armor" | "hunger"
}

export function ProgressBar({
  currentValue,
  maxValue,
  color,
  icon,
}: ProgressBarProps) {
  const getIcon = (): ReactNode => {
    if (icon === "health") return <HealthIcon className={BEM("icon")} />
    else if (icon === "armor") return <ArmorIcon className={BEM("icon")} />
    else if (icon === "hunger") return <HungerIcon className={BEM("icon")} />
    return null
  }

  return (
    <div className={BEM()}>
      {icon && getIcon()}
      <div className={BEM("bar")}>
        <p className={BEM("value")}>
          {currentValue}/{maxValue}
        </p>
        <div
          className={BEM("progress", {
            health: color === "health",
            armor: color === "armor",
            hunger: color === "hunger",
          })}
          style={{ width: (100 * currentValue) / maxValue + "%" }}
        />
      </div>
    </div>
  )
}
