import React from 'react'
import classes from './User.module.css'
import {NavLink} from "react-router-dom";


const User = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.user}>
            <NavLink to={path}>
                <div>{props.userName}</div>
                <div>{props.lastMessage}</div>
            </NavLink>
        </div>
    )
}

export default User
