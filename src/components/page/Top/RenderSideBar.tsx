import { memo, useState } from 'react'

const SidebarWrap = ({ children, toggle }: any) => {
  return (
    <>
      <button onClick={toggle}>トグルボタン</button>
      {children}
    </>
  )
}

const Sidebar = () => {
  return (
    <>
      <input type="text" name="name" placeholder="名前" defaultValue="" />
      <input type="tel" name="tel" placeholder="電話番号" defaultValue="" />
    </>
  )
}

export const RenderSidebar = ({ type, toggle }: any) => {
  if (type === 1) {
    return (
      <SidebarWrap toggle={toggle}>
        <p>1</p>
        <Sidebar />
      </SidebarWrap>
    )
  } else {
    return (
      <SidebarWrap toggle={toggle}>
        <p>2</p>
        <Sidebar />
      </SidebarWrap>
    )
  }
}

// export const PureRenderSidebar = memo(RenderSidebar)
