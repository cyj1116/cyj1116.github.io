import React, { memo } from "react"
import { HeaderWrapper } from "./style"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
const AppHeader = memo(() => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/step")
  }
  const handleGoHome = () => {
    navigate("/home")
  }
  return (
    <HeaderWrapper className="nav flex">
      <div className="left">
        <Button onClick={handleGoHome}>Go Home</Button>
      </div>
      <div className="center">
        <Button onClick={handleNavigate}>Go To Step</Button>
      </div>
      <div className="right"></div>
    </HeaderWrapper>
  )
})

export default AppHeader
