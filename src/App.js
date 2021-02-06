import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";

let store = {
    header: "Hello, hello, you see me?",
    text: "Oh shit, looks like we poked API"

}


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div>
                {/*<Profile />*/}
                {/*<Dialogs />*/}
                <News />
            </div>
        </div>
    )
}

export default App;
