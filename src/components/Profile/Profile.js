import React from 'react'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div className={classes.content}>
                <img className={classes.backgroundImage}
                     src='https://blog.sandiego.org/wp-content/uploads/2020/04/SDT_Zoom-Backgrounds_April-8_Windansea-1_1200x630.jpg'
                     alt='hubs'/>
            </div>
            <div>
                {/*<img className={classes.avatar} src='https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg' alt='avatar' />*/}
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

