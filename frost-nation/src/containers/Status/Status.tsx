import React, { ReactNode, useState } from "react"
import { block } from "bem-cn"

import { TopPanel } from "./components/TopPanel"
import { BottomPanel } from "./components/BottomPanel"
import { MainContent } from "./components/MainContent"
import { InventoryContent } from "./components/InventoryContent"
import { CompassContent } from "./components/CompassContent"
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

  const handleBackpack = () => {
    if (isBackpack) {
      setBackpack(false)
    } else {
      setBackpack(true)
      setCompass(false)
    }
  }
  const handleCompass = () => {
    if (isCompass) {
      setCompass(false)
    } else {
      setCompass(true)
      setBackpack(false)
    }
  }

  const getContent = (): ReactNode => {
    if (isBackpack) return <InventoryContent />
    if (isCompass) return <CompassContent />
    return <MainContent player={player} />
  }

  return (
    <div className={BEM()}>
      <TopPanel player={player} />
      {getContent()}
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
