import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "antd"

const Home: React.FC = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/step/1")
  }
  return (
    <div>
      <Button onClick={handleNavigate}>Go to Step</Button>{" "}
    </div>
  )
}

export default Home
