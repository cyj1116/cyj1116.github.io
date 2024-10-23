import React, { memo } from "react"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
// import Lenis from "lenis"
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./views/home"
import { Step } from "./views/step"

// const lenis = new Lenis()
// Use requestAnimationFrame to continuously update the scroll
// function raf(time: number) {
//   lenis.raf(time)
//   // console.log(time, "time")
//   requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf)

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/step/*" element={<Step />} />
      </Routes>
      <AppFooter />
    </div>
  )
})
export default App
