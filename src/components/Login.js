import { FcGoogle } from 'react-icons/fc'
import { auth } from '../firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const Login = () => {
    return (
        <div className="flex h-[100vh] text-gray-200">
            <div className="m-auto w-[25rem] rounded-md border border-white p-5 text-center ">
                <span className="text-2xl">
                    Welcome to <strong>Arad chat</strong>
                </span>
                <button
                    className="relative mb-4 mt-10 flex w-full items-center justify-center rounded-md bg-white p-2 text-center text-xl text-black"
                    onClick={() =>
                        auth.signInWithRedirect(
                            new firebase.auth.GoogleAuthProvider()
                        )
                    }
                >
                    <FcGoogle className="absolute left-2  text-[40px]" /> Sign
                    in with Google
                </button>
            </div>
        </div>
    )
}

export default Login
