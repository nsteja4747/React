import React from 'react'
import './Sidebar.css'
import {Home,Timeline,TrendingUp,ChatBubbleOutline,Feedback} from '@material-ui/icons'
import {People,Mail,Work,AttachMoney,BarChart,Info,ShoppingBasketOutlined} from '@material-ui/icons'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarListMenu">
                       <li className="sidebarListItem active">
                        <Home className="sidebarIcon"/>
                        Home
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                        </li>
                        <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sale
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarListMenu">
                       <li className="sidebarListItem">
                        <People className="sidebarIcon"/>
                        Users
                        </li>
                        <li className="sidebarListItem">
                        <ShoppingBasketOutlined className="sidebarIcon"/>
                        Products
                        </li>
                        <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon"/>
                        Transactions
                        </li>
                        <li className="sidebarListItem">
                        <BarChart className="sidebarIcon"/>
                        Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarListMenu">
                       <li className="sidebarListItem ">
                        <Mail className="sidebarIcon"/>
                        Mail
                        </li>
                        <li className="sidebarListItem">
                        <Feedback className="sidebarIcon"/>
                        Feedback
                        </li>
                        <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon"/>
                        Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarListMenu">
                       <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        Manage
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                        </li>
                        <li className="sidebarListItem">
                        <Info className="sidebarIcon"/>
                        Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
