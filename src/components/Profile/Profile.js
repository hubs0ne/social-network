import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "./Avatar/Avatar";
import Biography from "./Biography/Biography";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.wallpaper}
                     src='https://cdn1.savepice.ru/uploads/2021/2/5/9f34c77e9ded6f0b71b4dfe3d05349b7-full.jpg'
                     alt='hubs'/>
            </div>
            <div className={classes.avatar_bio}>
            <Avatar />
            <div>
                <div className={classes.bio}>
                    <Biography />
                </div>
            </div>
            <MyPosts />
            </div>
        </div>
    )
}

export default Profile
