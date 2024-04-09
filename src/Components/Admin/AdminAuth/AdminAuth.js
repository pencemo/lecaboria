import React, {useContext} from 'react'
import { AuthContext } from '../../../Context/Context'
import Login from '../../Login/Login'

function AdminAuth({children}) {
    const {user} = useContext(AuthContext)
  return (
    <div >
      {user ? children : <Login></Login>}
    </div>
  )
}

export default AdminAuth
