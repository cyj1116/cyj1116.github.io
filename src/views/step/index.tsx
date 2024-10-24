import Interview from "@/components/interview"
import React from "react"
import { Outlet } from "react-router-dom"

export const Step = () => {
  return (
    <div>
      Step
      <Interview />
      <Outlet />
    </div>
  )
}
