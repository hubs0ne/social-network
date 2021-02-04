import React from 'react'
import classes from './List.module.css'
import User from './User/User'

const List = () => {
    return(
        <div className={classes.list}>
            Dialogs:
            <User />
        </div>
    )
}

export default List
