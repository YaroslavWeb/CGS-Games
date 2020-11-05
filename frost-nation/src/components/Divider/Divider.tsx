import React from "react"
import { block } from "bem-cn"

import "./styles.scss"

const BEM = block("divider")

interface DividerProps {
  height?: number
}

export function Divider({ height = 3 }: DividerProps) {
  return <div style={{ height }} className={BEM()} />
}
