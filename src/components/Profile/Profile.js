import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.wallpaper}
                     src='https://blog.sandiego.org/wp-content/uploads/2020/04/SDT_Zoom-Backgrounds_April-8_Windansea-1_1200x630.jpg'
                     alt='hubs'/>
            </div>
            <div>
                <img className={classes.avatar} src='https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg' alt='avatar' />
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile
