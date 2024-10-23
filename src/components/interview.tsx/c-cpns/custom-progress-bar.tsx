import React, { useEffect, useState, useCallback } from "react"
import { Progress } from "antd"
import { calcTotalTime } from "./utils"

interface CustomProgressBarProps {
  progress: Record<number, string> | undefined
  canPlay: boolean
  canSkip: boolean
}

export const CustomProgressBar: React.FC<CustomProgressBarProps> = ({
  progress,
  canPlay,
  canSkip,
}) => {
  const [percent, setPercent] = useState(0)
  const [totalTime, setTotalTime] = useState(calcTotalTime(progress))
  const [currentTime, setCurrentTime] = useState(0)
  const [currentStatus, setCurrentStatus] = useState("")

  const getCurrentStatus = useCallback(
    (time: number) => {
      let t = 0
      for (const key in progress) {
        if (Object.prototype.hasOwnProperty.call(progress, key)) {
          const numKey = parseInt(key, 10)
          t += numKey
          if (time <= t) {
            return progress[numKey]
          }
        }
      }
      return ""
    },
    [progress]
  )

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (totalTime > 0) {
      if (canPlay) {
        intervalId = setInterval(() => {
          setPercent((prevPercent) => {
            if (prevPercent >= 100) {
              clearInterval(intervalId)
            }
            const newPercent = prevPercent + 100 / (totalTime * 30)
            return newPercent >= 100 ? 100 : newPercent
          })
          setCurrentTime((prevTime) => {
            const newTime = prevTime + 1000 / 30 / 1000
            setCurrentStatus(getCurrentStatus(newTime))
            return newTime
          })
        }, 1000 / 30) // 每帧的时间间隔
      }
      if (canSkip) {
        setPercent(100)
      }
    }

    // 清理定时器
    return () => clearInterval(intervalId)
  }, [totalTime, canPlay, canSkip, getCurrentStatus])

  const renderPercentText = () => {
    if (percent > 0 && percent < 100 && totalTime !== 1) {
      return (
        <div className="w-[100%] flex justify-between h-[20px]">
          <div>{currentStatus}</div>
          <div>{Math.ceil(percent)}%</div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-[100%] h-[40px]">
      <Progress className="w-[100%]" percent={percent} showInfo={false} />
      {renderPercentText()}
    </div>
  )
}
