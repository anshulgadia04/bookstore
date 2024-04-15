import React from "react";
import { Link , Navigate} from "react-router-dom";
import { useForm } from "react-hook-form"
import  axios  from "axios";
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data);
    await axios.post("http://localhost:3000/user/login",{
      email : data.email,
      password : data.password
    })
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("Logged in Successfully");
      }
      console.log("Res from Login is : ",res.data.user._id)
        localStorage.setItem("UserID" , res.data.user._id)
        console.log("User id set in local storage")      
    })
    .catch((err)=>{
      if(err.response){
        toast.error(err.response.data.message);
      }
      
    })
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form>
      
            <button onClick={()=>{
              <Navigate to="/"/>
            }} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">

              ✕

            </button>
            
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
