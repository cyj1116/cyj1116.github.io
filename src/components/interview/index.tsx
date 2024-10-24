import React, { useEffect, useState } from "react"
import data, { IData } from "./data"
import { Button } from "antd"
import { Inner } from "./c-cpns/inner"
import { useNavigate, useParams } from "react-router-dom"

export default function Interview() {
  let { id } = useParams()
  if (typeof id !== "string") {
    id = "1"
  }
  const [step, setStep] = useState(Number(id))
  const navigate = useNavigate()
  useEffect(() => {
    setStep(Number(id))
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
    </div>
  )
}
