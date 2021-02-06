import React from 'react'
import classes from './Dialogs.module.css'
import List from "./List/List";
import Window from "./Window/Window";

const Dialogs = () => {
    return (
        <div className={classes.wrapper}>
        <div className={classes.list}>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
        <div className={classes.window}>
            <Window />
        </div>
        </div>
    )
}

export default Dialogs
