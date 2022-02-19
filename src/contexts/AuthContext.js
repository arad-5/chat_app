import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '@firebase/auth-compat'
import { auth } from '../firebase'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
            if (user) {
                navigate('/chat')
                console.log(user)
            }
        })
    }, [user, navigate])
    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
