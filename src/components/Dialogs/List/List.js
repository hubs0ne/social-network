import React from 'react'
import classes from './List.module.css'
import User from './User/User'
import {NavLink} from "react-router-dom";

const List = () => {
    return(
        <div className={classes.main}>
            <User id='1' userName='Mark' lastMessage='Good bye :)' />
            <User id='2' userName='Annabel' lastMessage='Good night, dear' />
        </div>
    )
}

export default List
