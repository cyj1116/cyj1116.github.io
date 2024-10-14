import React, { memo, useEffect, useState } from "react"
import Kv from "./c-cpns/kv"

// import CyRequest from "@/services"
const Home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState<any>({
    title: "11",
    subtitle: "22",
  })

  useEffect(() => {
    // CyRequest.get({ url: "/home/highscore" }).then((res) => {
    //   setHighScore(res)
    // })
  }, [])

  return (
    <div>
      <Kv />
      <h2 className="text-white h-[100vh]">{highScore.title}</h2>
      <h2>{highScore.subtitle}</h2>
      <ul>
        {highScore.list?.map((item: any) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

export default Home
