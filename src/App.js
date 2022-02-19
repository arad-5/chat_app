import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Chat from './components/Chat'

const App = () => {
    return (
        <div className="bg-black">
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/chat" element={<Chat/>} />
            </Routes>
        </div>
    )
}

export default App
