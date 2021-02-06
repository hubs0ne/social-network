import React from 'react'
import classes from './News.module.css'
import NewsBlock from "./NewsBlock/NewsBlock";

const News = () => {
    return (
        <div className={classes.news}>
            <h1>
                Location Newspaper!
            </h1>
            <div>
                <NewsBlock news_block_header='Причиной пожара стало..' news_block_info='Женщина забыла выключить действительно забыла выключить свой утюг и впервые не проверила это!' />
                <NewsBlock news_block_header='Пьяный мужик поцарапал тигра..' news_block_info='Оказалось, что тигр был тоже в состоянии алкогольного опьянения, по его словам он шёл домой, в лес после корпоратива в зоопарке!' />
            </div>
        </div>
    )
}

export default News
