import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageBooks() {
    const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        await axios.get("http://localhost:3000/book/all").then((res) => {
          setBooks(res.data);
          console.log(res.data);
          
        });
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);
  
  return (
    <>
      <h1 className="text-4xl text-center">Manage Books</h1>
      <div className="w-full ml-4">
        <div className="text-white flex flex-col space-y-5 w-[600px]">
          <Link
            to="/admin/managebooks/addbook"
            className=" hover:bg-pink-800 duration-200 bg-pink-500 px-2 py-1 text-xl rounded-md w-fit"
          >
            Add Book
          </Link>
          <Link
            to="/admin/managebooks/remove-edit-books"
            className=" hover:bg-pink-800 duration-200 bg-pink-500 px-2 py-1 text-xl rounded-md w-fit"
          >
            Remove and Edit Book
          </Link>
        </div>
      </div>


      <div className=" w-full items-center flex justify-center flex-col mt-20">
        <table className="w-3/4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Book Name</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Tittle</th>
              <th className="border px-4 py-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item) => {
              return (
                <tr key={item._id}>
                  <td className="border">{item.name}</td>
                  <td className="border px-4 py-2">{item.category}</td>
                  <td className="border px-4 py-2">{item.price}</td>
                  <td className="border px-4 py-2">{item.tittle}</td>
                  <td className="border px-4 py-2"><img className=" w-10" src={item.image}/></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
      </div>
    </>
  );
}

export default ManageBooks;
