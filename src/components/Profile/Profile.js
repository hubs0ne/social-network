import React from 'react'
import classes from './Profile.module.css'
import Avatar from "./Avatar/Avatar";
import Biography from "./Biography/Biography";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.wallpaper}>
                <img src='https://cdn1.savepice.ru/uploads/2021/2/5/9f34c77e9ded6f0b71b4dfe3d05349b7-full.jpg'
                     alt='hubs'/>
            </div>
            <Avatar/>
            <Biography/>
            <MyPosts/>
        </div>
    )
}

export default Profile
