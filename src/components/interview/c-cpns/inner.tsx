import React, { useEffect, useState } from "react"
import { IData } from "../data"
import { CustomProgressBar } from "./custom-progress-bar"

interface IProps {
  data: IData
  currentStep: number
}

export const Inner: React.FC<IProps> = ({ data, currentStep }) => {
  const [canPlay, setCanPlay] = useState(false)
  const [canSkip, setCanSkip] = useState(false)

  useEffect(() => {
    if (currentStep === data.step) {
      setCanPlay(true)
    } else if (currentStep > data.step) {
      setCanSkip(true)
    } else {
      setCanPlay(false)
      setCanSkip(false)
    }
  }, [currentStep, data.step])

  return (
    <div className="w-[25%] h-[140px] px-[12px] py-[24px] flex flex-col justify-between items-center">
      <div className="flex justify-between w-[100%] items-center">
        <div className="w-[50%] text-[48px] leading-[120%] font-bold">
          <span className="">step</span>
          <span>{data.step}</span>
        </div>
        <div className="w-[50%] flex flex-col text-right">
          <p className="text-[24px] leading-[120%]">{data.title}</p>
          <span className="text-[16px] overflow-hidden whitespace-nowrap max-w-[100%] leading-[24px] text-ellipsis">
            {data.description}
          </span>
        </div>
      </div>
      <CustomProgressBar
        progress={data.progress}
        canPlay={canPlay}
        canSkip={canSkip}
      />
    </div>
  )
}
