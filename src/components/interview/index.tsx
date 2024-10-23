import React, { useEffect, useState } from "react"
import data, { IData } from "./data"
import { Button } from "antd"
import { Inner } from "./c-cpns/inner"
import { useNavigate, useParams } from "react-router-dom"

export default function Interview() {
  const { id } = useParams<{ id: string }>()
  const [step, setStep] = useState(Number(id) || 1)
  const navigate = useNavigate()
  useEffect(() => {
    setStep(Number(id) || 1)
  }, [id])
  const handleClickBtn = () => {
    if (step >= 4) {
      return
    }
    navigate(`/step/${step + 1}`)
    setStep(step + 1)
  }

  return (
    <div className="flex flex-col items-center bg-white text-[#0079d6]">
      <div className="flex justify-center w-[1312px]">
        {data.map((item: IData) => (
          <Inner data={item} key={item.id} currentStep={step} />
        ))}
      </div>
      <Button type="primary" onClick={() => handleClickBtn()}>
        Step++
      </Button>
      <div className="text-center">
        和我之前做的 OPPO 体验官非常像,
        也是有进度条然后阶段一二三然后让用户填表格,<br></br>
        那会还做到了刷新保留状态, 点返回也撤销状态<br></br>
        不清楚这个需不需要, 要写的话也很快的
      </div>
    </div>
  )
}
