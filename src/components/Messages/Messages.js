import React from 'react'
import classes from './Messages.module.css'
import List from "./List/List";
import Dialog from "./Dialog/Dialog";

const Messages = () => {
    return (
        <div className={classes.messages}>
            <List />
            <Dialog />
        </div>
    )
}

export default Messages
