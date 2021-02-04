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
                i: pook <br/>
                user name: hahaha
            </div>
            <div>
                <Input />
            </div>
        </div>
    )
}

export default Window
