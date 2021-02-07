import React from 'react'
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src='https://eugeneronin.com/wp-content/uploads/2010/01/avatar.jpg' alt='user'/>
            {props.message}
            <div>
                like {props.like}
            </div>
        </div>
    )
}

export default Post
