import React from 'react'
import classes from './Window.module.css'
import Input from "./Input/Input"
import Correspondence from "./Correspondence/Correspondence";

const Window = () => {
    return (
        <div className={classes.main}>
            <header className={classes.header}>
                User name, online
            </header>
            <div className={classes.correspondenceWindow}>
            <Correspondence/>
            <Correspondence/>
            <div>
                user writing..
            </div>
            </div>
            <Input/>
        </div>
    )
}

export default Window
