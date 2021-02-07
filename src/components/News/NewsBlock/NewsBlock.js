import React from 'react'
import classes from './NewsBlock.module.css'

const NewsBlock = (props) => {
    return (
        <div className={classes.newsBlock}>
            <div className={classes.header}>
                {props.header}
            </div>
            <div className={classes.info}>
                {props.info} <br/>
                <a href='/' title='You really interesting?'>More info..</a>
            </div>
        </div>
    )
}

export default NewsBlock
