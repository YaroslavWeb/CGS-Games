import React from "react"
import { IEmpty, IStuff, IWeapone } from "interfaces"
import { ReactComponent as BandageIcon } from "assets/icons/items/bandage.svg"
import { ReactComponent as CanIcon } from "assets/icons/items/can.svg"
import { ReactComponent as PillsIcon } from "assets/icons/items/pills.svg"
import { ReactComponent as SodaIcon } from "assets/icons/items/soda.svg"
import { ReactComponent as BatIcon } from "assets/icons/items/bat.svg"
import { ReactComponent as KnifeIcon } from "assets/icons/items/knife.svg"
import { ReactComponent as PistolIcon } from "assets/icons/items/pistol.svg"
import { ReactComponent as UziIcon } from "assets/icons/items/uzi.svg"

export const items: Record<string, IStuff> = {
  bandage: {
    name: "Бинт",
    icon: <BandageIcon />,
    type: "stuff",
  },
  can: {
    name: "Сардины",
    icon: <CanIcon />,
    type: "stuff",
  },
  pills: {
    name: "Таблетки",
    icon: <PillsIcon />,
    type: "stuff",
  },
  soda: {
    name: "Соса-Сола",
    icon: <SodaIcon />,
    type: "stuff",
  },
}

export const weapons: Record<string, IWeapone> = {
  bat: {
    name: "Бита",
    icon: <BatIcon />,
    type: "weapone",
  },
  knife: {
    name: "Нож",
    icon: <KnifeIcon />,
    type: "weapone",
  },
  pistol: {
    name: "Пистолет",
    icon: <PistolIcon />,
    type: "weapone",
  },
  uzi: {
    name: "ПП",
    icon: <UziIcon />,
    type: "weapone",
  },
}

export const empty: IEmpty = {
  name: "Empty",
  icon: <></>,
  type: "empty",
}
