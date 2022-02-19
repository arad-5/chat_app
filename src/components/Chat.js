import {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'

import { useAuth } from '../contexts/AuthContext'
import { useEffect } from 'react'
import axios from 'axios'
const Chat = () => {
    const navigate = useNavigate()
    const user = useAuth()
    const [loading, setLoading] = useState(true)

    console.log(user)
    const LogOut = async () => {
        await auth.signOut()
        navigate('/')
        console.log('hello')
    }

    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob()

        return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' })
    }

    useEffect(() => {
        if (!user) {
            navigate('/')
            return
        }
        axios
            .get('https://api.chatengine.io/users/me', {
                headers: {
                    'project-id': process.env.REACT_APP_CHAT_ENGINE_ID,
                    'user-name': user.email,
                    'user-secret': user.uid,
                },
            })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formData = new FormData()
                formData.append('email', user.email)
                formData.append('username', user.email)
                formData.append('secret', user.uid)

                getFile(user.photoURL).then((avatar) => {
                    formData.append('avatar', avatar, avatar.name)
                    axios
                        .post('https://api.chatengine.io/users/', formData, {
                            headers: {
                                'private-key':
                                    process.env.REACT_APP_CHAT_ENGINE_KEY,
                            },
                        })
                        .then(() => setLoading(false))
                        .catch((err) => console.log(err))
                })
            })
    }, [user , navigate])


    if (!user || loading) return "Loading"
    
    return (
        <div>
            <div>
                <nav className="flex h-[4rem] items-center border-b px-5">
                    <button
                        className="rounded-full bg-red-900 px-2 py-1 font-bold text-red-200"
                        onClick={() => LogOut()}
                    >
                        Logout
                    </button>
                </nav>
                <ChatEngine
                    height="100vh"
                    projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
                    userName={user.email}
                    userSecret={user.uid}
                />
            </div>
        </div>
    )
}

export default Chat
