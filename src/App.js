import React, {useEffect, useContext} from "react";
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Menu from "./Pages/Menu/Menu";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import LoginPage from "./Pages/Login/LoginPage";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import { AuthContext, FirebaseContext } from "./Context/Context";
import AdminAuth from "./Components/Admin/AdminAuth/AdminAuth";
import Adminpage from "./Pages/AdminPage/Adminpage";
import MenuList from './Components/Admin/MenuList/MenuList'
import Error from "./Pages/Error/Error";

function App() {

  const { setUser} =useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    // console.log(user);
  })

  
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path='/'  element={<Home/>} />
          <Route path='/about'   element={<About/>} />
          <Route path='/menu'    element={<Menu/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/Login'    element={<LoginPage/>} />
          <Route path='*'        element={<Error />} />
          <Route path='/admin/'   element={<AdminAuth><Adminpage /></AdminAuth>} >
            <Route path="" element={<Dashboard />} />
            <Route path="menu-items" element={<MenuList />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
