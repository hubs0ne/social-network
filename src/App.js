import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import {BrowserRouter , Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";

let news = {
    header: ["Собака укусила памятник.", "Ох уж этот жестокий мир!"],
    info: ["Волонтёры поймав собаку как следует покусала её в ответ!", "Вчера вечером дождь намочил 30% людей находившихся на улице!"]
}

const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='pages'>
                <Route path='/profile' component={Profile} />
                <Route path='/dialogs' component={Messages} />
                <Route path='/news' component={News} />
            </div>
            <Footer />
        </div>
        </BrowserRouter>
    )
}

export default App;
