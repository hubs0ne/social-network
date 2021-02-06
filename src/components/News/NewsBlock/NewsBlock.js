import React from 'react'
import classes from './NewsBlock.module.css'

const NewsBlock = (props) => {
    return (
        <div className={classes.news_block}>
            <div className={classes.header}>
                {props.news_block_header}
            </div>
            <div className={classes.info}>
                {props.news_block_info} <br/>

                <a href='/' title='You realy intresting?'>
                    More info..
                </a>
            </div>
        </div>
    )
}

export default NewsBlock
