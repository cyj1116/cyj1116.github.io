import React, { memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
import Lenis from "lenis"
const lenis = new Lenis()
// Use requestAnimationFrame to continuously update the scroll
function raf(time: any) {
  lenis.raf(time)
  console.log(time,'time')
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  )
})
export default App

