import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MainHeader from './common/MainHeader.jsx'
import MainNav from './common/MainNav.jsx'
import MainFooter from './common/MainFooter.jsx'
import './App.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <MainHeader />
                <MainNav />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
                <MainFooter />
            </BrowserRouter>

        </>
    );
}

export default App
