import React from 'react'
import classes from './Window.module.css'
import Input from "./Input/Input";

const Window = () => {
    return (
        <div className={classes.window}>
            <header className={classes.header}>
                User name, online
            </header>
            <div className={classes.correspondence}>
                user name: hahaha
                i: pook
            </div>
            <div>
                <Input />
            </div>
        </div>
    )
}

export default Window
