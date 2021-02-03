import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                Dialogs:
                <Dialog name='Mark' text='Send book :)'/>
                <Dialog name='Alex' text='How are you? :)'/>
                <Dialog name='Patrick' text="I'm a star :)"/>
                <Dialog name='Froda' text='Send ring :)'/>
                <Dialog name='Mama' text='Why homework folder size 25gb?'/>
            </div>
            <div className={classes.chat}>
                Chat
            </div>
        </div>
    )
}

export default Dialogs
