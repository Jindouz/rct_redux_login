import React from 'react'
import { Outlet } from 'react-router-dom'
import Ads from './Ads'

const Main = () => {
  return (
    <div>
        <Outlet />
        <Ads />
    </div>
  )
}

export default Main