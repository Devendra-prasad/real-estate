import React, { useState } from "react";

import { useNavigate } from 'react-router-dom'

function LoginForm() {

  const navigate = useNavigate()

  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="flex justify-center items-center px-4 py-10">

        <div className="w-full sm:w-[28rem] bg-white p-6 rounded-lg shadow-lg" >

             {/* Close button */}
            <button
                onClick={() => navigate('/')}
                className='absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl'>
                ✖
            </button>

            {/* header title */}
            <div className="text-2xl font-semibold text-center mb-6">
                {isLoginMode ? "Login" : "Sign Up"}
            </div>

            {/* tab control */}
            <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
                <button onClick={() => setIsLoginMode(true)} className ={ `w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black " }`} >
                    Login
                </button>
                <button onClick={() => setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black " }`} >
                    Sign Up
                </button>
                <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`} ></div>
            </div>

            {/* form section */}
            <form className="space-y-4">
                {
                    !isLoginMode && (
                        <input className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400" type="text" placeholder="Name" required />
                    )
                }

                {/* shared form section  */}
                <input className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400" type="email" placeholder="Email" required />
                <input className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400" type="password" placeholder="Password" required />

                {/* signup field  */}
                {
                    !isLoginMode && (
                        <input className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400" type="password" placeholder="Confirm Password" required />
                    )
                }

                {/* forgot password for login  */}
                {
                    isLoginMode && (
                        <div className="text-right">
                            <p className="text-cyan-600 cursor-pointer hover:underline">Forget password</p>
                        </div>
                    )
                }

                {/* shared button  */}
                <button className="w-full p-3 cursor-pointer bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition ">
                    {
                        isLoginMode ? "Login" : "SignUp"
                    }
                </button>
                
                {/* switch message  */}
                <p className="text-center text-gray-600">
                    {isLoginMode ? "Don't have an account" : "Already have an account"}
                    <a onClick={(e) => setIsLoginMode(!isLoginMode)} href="#" className="text-cyan-600 cursor-pointer hover:underline" >{isLoginMode ? " SignUp" : " Login"} </a>
                </p>


            </form>
        </div>
    </div>
  );
}

export default LoginForm;
