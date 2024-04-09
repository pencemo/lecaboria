import React, {useState, useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './Slidebar.css'
import {MessageSquareText, LogOut, BellRing,ChevronLeft, LayoutDashboard, ShoppingBag, Soup, BadgePercent } from 'lucide-react';
import { FirebaseContext } from '../../../Context/Context';
import Logo from '../../../Images/Logo.png'

function Slidebar() {
    const slidelink = [
        {
         name: 'Dashboard',
         Link: '',
         icon : <LayoutDashboard strokeWidth={1.5} size={25} />,
        },
        {
         name: 'Menu Items',
         Link: 'menu-items',
         icon : <Soup strokeWidth={1.5} size={25} />,
        },
        {
         name: 'All Orders',
         Link: 'orders',
         icon : <ShoppingBag strokeWidth={1.5} size={25} />
        },
        {
         name: 'Offers',
         Link: 'offers',
         icon : <BadgePercent strokeWidth={1.5} size={25} />
        },
        {
         name: 'Notification',
         Link: 'offers',
         icon : <BellRing strokeWidth={1.5} size={25} />
        },
        {
         name: 'Messages',
         Link: 'offers',
         icon : <MessageSquareText strokeWidth={1.5} size={25} />
        },
    ]

    // let {pathname} = useLocation();
    
    const [slidebar, setSlidebar]=useState(true)

    const slidebartoggle =(()=>{
        setSlidebar(!slidebar)
    })

    const navigate = useNavigate();
    const {firebase} = useContext(FirebaseContext)
  
  return (
    <div>
        <div className={slidebar ? "slidbar" : "slidbar slidebar-toggle"}>
            <div className="slide-logo">
                <img src={Logo} alt="Logo" />
                <div onClick={slidebartoggle} className="slidebar-btn"><ChevronLeft className='' strokeWidth={1} /></div>
            </div>
            <div className="slide-links">
                <ul>
                    {
                        slidelink.map((items)=>(
                            <li><NavLink to={items.Link}>{items.icon} <span>{items.name}</span></NavLink></li>
                        ))
                    }
                </ul>
            </div>
            <div className="logout" onClick={()=>{
                firebase.auth().signOut();
                navigate("/login");
            }}>
                <LogOut strokeWidth={1} />
                <span>LogOut</span>
            </div>
        </div>
    </div>
  )
}

export default Slidebar
