import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className='my-posts-main'>
            <div>
                My posts
                <div>
                    <textarea>

                    </textarea>

                    <button>Add post</button>
                </div>
                <Post message='Hi, how are you?' like='15' />
                <Post message='It is my first post!' like='20' />
            </div>
        </div>
    )
}

export default MyPosts
