import React from 'react'
import "./Tobbar.css"
import {NotificationsNone,Settings,Language} from '@material-ui/icons';


function Topbar() {
    return (
        <div className="topbar_u">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">NST Demo</span>
                </div>
                <div className="topRight">
                    
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topBadgeIcon">2</span>

                    </div>
                    <img
                    src="https://th.bing.com/th/id/OIP.VYtiFKJWEbVlUt95KQ6GCwHaFk?w=200&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt="NA"
                    className="imageIcon" />
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
