import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { block } from "bem-cn"

import { IPlayer } from "interfaces"

import "./styles.scss"

const BEM = block("weapon")

interface WeaponProps {
  player: IPlayer
}

export function Weapon({ player }: WeaponProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const constraintsRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [nextIndex, setNextIndex] = useState<number>(0)
  const [isDrag, setDrag] = useState<boolean>(false)
  const [boxSize, setBoxSize] = useState<number>(0)

  useEffect(() => {
    const size: number = boxRef.current?.offsetWidth || 0
    setBoxSize(size)
    const resizeListener = () => {
      setBoxSize(size)
    }

    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])
  return (
    <div className={BEM()}>
      <span className={BEM("label")}>Оружие</span>
      <motion.div
        className={BEM("container")}
        ref={constraintsRef}
        style={{
          gridTemplateColumns: `repeat(${player.inventory.capacityBelt}, 1fr)`,
        }}
      >
        {player.inventory.belt.map((item, idx: number) => {
          return (
            <motion.div
              key={idx}
              ref={boxRef}
              className={BEM("box")}
              dragPropagation
              style={{
                height: boxSize,
              }}
              onHoverStart={() => {
                if (isDrag) {
                  setNextIndex(idx)
                }
              }}
            >
              {item && (
                <motion.div
                  className={BEM("item")}
                  style={{ zIndex: idx !== currentIndex ? 1000 : 1 }}
                  drag={item.name !== "Empty"}
                  dragElastic={1}
                  dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  onDragStart={() => {
                    setDrag(true)
                    setCurrentIndex(idx)
                  }}
                  onDragEnd={() => {
                    setDrag(false)
                    if (currentIndex !== -1 && nextIndex !== -1) {
                      // dispatch(dragItem(currentIndex, nextIndex))
                    }
                    setCurrentIndex(-1)
                    setNextIndex(-1)
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 1.05,
                  }}
                >
                  {item.icon}
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
