import React from 'react'
import classes from './Input.module.css'

const Input = () => {
    return(
        <form className={classes.input}>
            <input />
            <button>Send</button>
        </form>
    )
}

export default Input
