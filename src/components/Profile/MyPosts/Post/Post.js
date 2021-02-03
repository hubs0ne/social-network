import React from 'react'
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://eugeneronin.com/wp-content/uploads/2010/01/avatar.jpg' alt='user' />
            {props.message}
            <div>
                <span>
                    like {props.like}
                </span>
            </div>
        </div>
    )
}

export default Post
