import React from "react";

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
            
            {/* Username */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input type="email" 
              placeholder="Enter Your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input type="password" 
              placeholder="Enter Your Password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>

          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
