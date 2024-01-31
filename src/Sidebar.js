import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Xuan Xu</h2>
                <h4>1xxlovyxx1@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed you</p>
                    <p className="siderbar__statNumber">714,142</p>
                </div>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Views</p>
                    <p className="siderbar__statNumber">714,142</p>
                </div>
            </div>

            <div className="sidebar__bottom">

            </div>
        </div>
    )
}

export default Sidebar