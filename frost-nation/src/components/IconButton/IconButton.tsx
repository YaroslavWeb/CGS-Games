import React, { ReactNode } from "react"
import { block } from "bem-cn"

import { ReactComponent as BackpackIcon } from "assets/icons/backpack.svg"
import { ReactComponent as CompassIcon } from "assets/icons/compass.svg"
import "./styles.scss"

const BEM = block("icon-button")

interface IconButtonProps {
  icon: "backpack" | "compass"
  active: boolean
  onClick?: () => void
}

export function IconButton({ icon, active, onClick }: IconButtonProps) {
  const getIcon = (): ReactNode => {
    if (icon === "backpack") return <BackpackIcon className={BEM("icon")} />
    return <CompassIcon className={BEM("icon")} />
  }

  return (
    <button onClick={onClick} className={BEM({ active })}>
      {getIcon()}
    </button>
  )
}
