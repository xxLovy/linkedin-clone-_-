import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import HeaderOption from './HeaderOption'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="./linkedin_3536505.png" alt="linkedin picture" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption />

            </div>

        </div>
    )
}

export default Header