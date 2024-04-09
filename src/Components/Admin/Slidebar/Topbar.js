import React, {useContext} from 'react'
import './Topbar.css'
import { Container } from 'react-bootstrap'
import { AuthContext } from '../../../Context/Context'

function Topbar() {
  const {user} =useContext(AuthContext)
  return (
    <div className='topbar'>
        <Container className='topbar-container'>
      <h1>Admin Panel</h1>
      <div className="admin-dts">
        <h4>{user && user.email}</h4>
        <img src="./assets/bg2.jpg" alt="img" />
      </div>
      </Container>
    </div>
  )
}

export default Topbar
