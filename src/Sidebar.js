import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'

function Sidebar() {

    const recentItem = (topic) => {
        return (<div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Xuan Xu</h2>
                <h4>1xxlovyxx1@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed you</p>
                    <p className="siderbar__statNumber">714,142</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="siderbar__statNumber">714,142</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {/* <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>react</p>
                </div> */}
                {recentItem('reactjs')}
                {recentItem('HTML')}
                {recentItem('CSS')}
                {recentItem('SWE')}
            </div>
        </div>
    )
}

export default Sidebar