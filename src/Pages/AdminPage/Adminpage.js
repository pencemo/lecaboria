import React from 'react'
import { Outlet } from 'react-router-dom'
import Slidebar from '../../Components/Admin/Slidebar/Slidebar'
import Topbar from '../../Components/Admin/Slidebar/Topbar'

function Adminpage() {
  return (
    <div>
        <Topbar></Topbar>
        <Slidebar />
        <Outlet />
    </div>
  )
}

export default Adminpage
