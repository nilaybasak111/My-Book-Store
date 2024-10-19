import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
   <>
    <div className='flex h-screen items-center justify-center'>
    <div id="my_modal_3" className="border-[2px] shadow-sm p-4 rounded-md">
          <div className="dark:bg-slate-900 dark:text-white">
            <form method="div">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">SignUp</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>

            {/* Button */}
            <div className="flex mt-4">
              <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200 cursor-pointer">
                SignUp
              </button>
            </div>
          </div>
        </div>
    </div>
   </>
  )
}

export default Signup
