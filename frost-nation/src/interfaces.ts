import { ReactNode } from "react"

export interface IAction {
  type: string
  payload?: any
}

export interface IGame {
  board: IBoard[][]
  players: IPlayer[]
  environment: IEnvironment
}

export interface IBoard {
  number: number
  type: "event" | "building" | "bar" | "spawn" | "empty"
}

export interface IPlayer {
  id: string
  position: number
  color: string
  colorSecond: string
  chars: {
    strength: number
    agility: number
    intelligence: number
    endurance: number
  }
  health: { currentHealth: number; maxHealth: number }
  armor: { currentArmor: number; maxArmor: number }
  hunger: { currentHunger: number; maxHunger: number }
  trash: number
  cash: number
  inventory: {
    capacityBelt: number
    capacityWeapon: number
    capacityBackpack: number
    belt: (IStuff | IEmpty)[]
    weapon: (IWeapone | IEmpty)[]
    backpack: (IWeapone | IStuff | IEmpty)[]
  }
}

export interface IStuff {
  name: string
  icon: ReactNode
  type: "stuff"
}

export interface IEmpty {
  name: "Empty"
  icon: ReactNode
  type: "empty"
}

export interface IWeapone {
  name: string
  icon: ReactNode
  type: "weapone"
}

export interface IEnvironment {
  temp: number
  date: { month: number; week: number; day: number }
  starving: number
  flakes: number
  duration: number
}
