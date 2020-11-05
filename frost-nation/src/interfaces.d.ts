export interface IAction {
  type: string
  payload?: any
}

export interface IGame {
  board: IBoard[][]
  turn: number
  players: IPlayer[]
  environment: IEnvironment
}

export interface IBoard {
  number: number
  type: "event" | "building" | "bar" | "spawn" | "empty"
}

export interface IPlayer {
  id: string
  waiting: boolean
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
    belt: { name: string }[] | []
    weapon: { name: string }[] | []
    backpack: { name: string }[] | []
  }
}

export interface IEnvironment {
  temp: number
  date: { month: number; week: number; day: number }
  starving: number
  flakes: number
}
