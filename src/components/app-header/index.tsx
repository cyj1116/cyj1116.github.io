import React, { memo } from "react"
import { HeaderWrapper } from "./style"
const AppHeader = memo(() => {
  return (
    <HeaderWrapper className="nav">
      <div className="left"></div>
      <div className="center"></div>
      <div className="right"></div>
    </HeaderWrapper>
  )
})

export default AppHeader
