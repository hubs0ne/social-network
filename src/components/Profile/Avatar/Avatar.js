import React from 'react'
import classes from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={classes.main}>
            <img className={classes.avatar} src='https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg' alt='avatar' />
        </div>
    )
}

export default Avatar
