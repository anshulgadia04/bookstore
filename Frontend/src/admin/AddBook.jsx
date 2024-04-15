import React, { useState , Navigate} from "react";
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function AddBook() {
    const [name ,setName] = useState("")
    const [category ,setCategory] = useState("")
    const [price ,setPrice] = useState(0)
    const [tittle ,setTittle] = useState("")
    const [img ,setImg] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const book = {
            name,
            category,
            price,
            tittle,
            img
        }

        if(name === "" || category === ""  || tittle === ""){
          toast.error("Please fill all the details")
          return
        }



        // console.log(book);
        await axios.post("http://localhost:3000/book/addbook" , book)
        .then(()=>{
            toast.success("Book added Successfully");
            navigate('/admin/managebooks')
        })
        .catch((err)=>{
            toast.error(err)
        })

    }
  return (
    <div>
    <h1 className=" text-4xl text-center mb-20">New Book Details</h1>

      <form class="max-w-md mx-auto border p-8 rounded-md">
      
        <div class="mb-5">
          <label
            for="bookname"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            id="bookname"
            onChange={(e)=>{setName(e.target.value)}}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="bookcategory"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <input
            type="text"
            id="bookcategory"
            onChange={(e)=>{setCategory(e.target.value)}}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="bookprice"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="text"
            id="bookprice"
            onChange={(e)=>{setPrice(e.target.value)}}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div class="mb-5">
          <label
            for="bobooktittle"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tittle
          </label>
          <input
            type="text"
            id="booktittle"
            onChange={(e)=>{setTittle(e.target.value)}}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div class="mb-5">
          <label
            for="bookImg"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image URL
          </label>
          <input
            type="text"
            id="bookImg"
            onChange={(e)=>{setImg(e.target.value)}}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
