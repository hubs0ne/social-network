import React from 'react'
import classes from './News.module.css'
import NewsBlock from "./NewsBlock/NewsBlock";

const News = (props) => {
    return (
        <div className={classes.news}>
            <h1>
                Location Newspaper!
            </h1>
            <div>
                <NewsBlock header={props.news} info={props.news} />
                <NewsBlock header='Открыт секрет богатства$$' info='Оказалось, что счастье не в деньгах, а в их количестве!!!' />
                <NewsBlock header='Как насчёт пива?' info='!Только сегодня, уникальная распродажа пива из Германии, успей попробовать, только сегодня!' />
                <NewsBlock header='Подарки на миллион!' info='Среди жителей ".." будет проведён розыгрышь, у вас есть шанс выиграть один из ста сотовых телефонов последней модели!!!' />
                <NewsBlock header='Вот чёрт!' info='Оказалось, что не так то и просто выдумывать новости)' />
                {/*<NewsBlock news_block_header='Причиной пожара стало..' news_block_info='Женщина забыла выключить утюг, действительно забыла выключить свой утюг и впервые не проверила это!' />*/}
                {/*<NewsBlock news_block_header='Пьяный мужик поцарапал тигра..' news_block_info='Оказалось, что тигр был тоже в состоянии алкогольного опьянения, по его словам он шёл домой, в лес после корпоратива в зоопарке!' />*/}
            </div>
        </div>
    )
}

export default News
