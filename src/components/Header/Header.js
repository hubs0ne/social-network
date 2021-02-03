import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png' alt='/' />
            {props.status}
        </header>
    )
}

export default Header
