import React, { useState } from 'react'
import { RenderSidebar } from './RenderSideBar'

export const Top = () => {
  const type = 2
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <main>Top</main>
      {/* <PureRenderSidebar type={type} toggle={handleToggle} /> */}
      <RenderSidebar type={type} toggle={handleToggle} />
      {toggle && <p>トグルがオンだよ</p>}
    </>
  )
}
