import React from "react"
import { useParams } from "react-router-dom"

export default function Step1() {
  let { id } = useParams()
  if (typeof id !== "string") {
    id = "0"
  }
  return (
    <div className="w-full h-[100vh] bg-gray-400 flex justify-center pt-[120px] text-[24px] leading-[120%]">
      Step的子组件{id}
    </div>
  )
}
