import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Login</h3>

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
            <div className="flex mt-4 sm:items-stretch md:space-x-48">
              <div>
              <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200 cursor-pointer">
                Login
              </button>
              </div>
              <div>
              <p>
                Not Registered{" "}
                <span className="underline text-blue-500 cursor-pointer">
                  <Link to="/signup">Signup</Link>
                </span>
              </p>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
