import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form>
          <Link to='/'>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">

              ✕

            </button>
            </Link>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className=" space-y-2 mt-3">
            <div>Email</div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 rounded-md outline-none border"
              {...register("email", { required: true })}
            />
            <br/>
            {errors.email && <span>This field is required</span>}
          </div>

          <div className=" space-y-2 mt-3">
            <div>Password</div>
            <input
              type="text"
              placeholder="Enter your password"
              className="w-80 rounded-md outline-none border"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span>This field is required</span>}
          </div>

          <div className="flex justify-around mt-5">
            <button 
            onClick={handleSubmit(onSubmit)}
            className=" bg-pink-500 px-2 py-1 rounded-md text-white hover:bg-pink-700 duration-200 cursor-pointer">
            
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                signup
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
