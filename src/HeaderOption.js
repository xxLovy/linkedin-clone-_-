import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser)
    return (
        <div className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && <Avatar className='headerOption__icon' onClick={onClick} src={user?.phoroURL} >{user?.email[0].toUpperCase()}</Avatar>}
            <h3 className='headerOption__title'>{title}</h3>


        </div >
    )

}

export default HeaderOption