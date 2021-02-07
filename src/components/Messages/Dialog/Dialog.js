import React from 'react'
import classes from './Dialog.module.css'
import Input from "./Input/Input"
import Chat from "./Chat/Chat";

const Dialog = () => {
    return (
        <div className={classes.dialog}>
            <div className={classes.header}>
                User name, online
            </div>
            <div className={classes.chatWindow}>
            <Chat />
            <Input />
            </div>
        </div>
    )
}

export default Dialog
