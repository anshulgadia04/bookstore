import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className=" h-screen flex justify-center items-center ">
      <div className="w-[600px]">
        <div  className="modal-box border-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/'>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            </Link>
          </form>
          <h3 className="font-bold text-lg">Sign up</h3>

          <div className=" space-y-2 mt-3">
            <div>Name</div>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-80 rounded-md outline-none border"
              {...register("name", { required: true })}
            />
            <br/>
            {errors.name && <span>This field is required</span>}
          </div>


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
            <br/>
            {errors.password && <span>This field is required</span>}
          
          </div>

          <div className="flex justify-around mt-5">
            <button 
            onClick={handleSubmit(onSubmit)}
            className=" bg-pink-500 px-2 py-1 rounded-md text-white hover:bg-pink-700 duration-200 cursor-pointer">
              Sign Up
            </button>
            <p>
              Have account?
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={()=>document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>{" "}
              <Login/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
