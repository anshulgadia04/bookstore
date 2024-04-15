import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import axios from 'axios'
import AddBook from "./AddBook";
import { Link } from "react-router-dom";
function Admin() {

  const [books , setBooks] = useState([]);
  useEffect(()=>{
    const getAllBooksData = async () =>{
      await axios.get("http://localhost:3000/book/all")
      .then((res)=>{
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err)=>{
        console.log("Error in Admin : ", err);
      })
    }
    getAllBooksData()
  },[])


  return (
    <div>
      <section class="text-gray-600 body-font">
        <h1 className=" text-4xl justify-center items-center text-center text-white">
          Admin
        </h1>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          
          <div class="">
            <h1 className="text-white text-xl"></h1>
              <Link to='/admin/managebooks' className=" hover:bg-pink-800 duration-200 bg-pink-500 px-2 py-1 text-xl rounded-md w-fit">
                Manage Books
              </Link>

              <Link to='/admin/users' className=" hover:bg-pink-800 duration-200 bg-pink-500 px-2 py-1 text-xl rounded-md w-fit">
                Manage Users
              </Link>
          
          </div>

          
        </div>
      </section>
    </div>
  );
}

export default Admin;
