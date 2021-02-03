import React from 'react'
import classes from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            <div>
                {props.name}
            </div>
            <div>
                {props.text}
            </div>
        </div>
    )
}

export default Dialog
