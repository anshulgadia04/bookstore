import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import UpdateBook from "./UpdateBook";
import { useNavigate } from "react-router-dom";

function RemoveBook() {
  const trashIcon = (
    <div className=" cursor-pointer hover:scale-110 w-fit ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
      </svg>
    </div>
  );

  const editIcon = (
    <div className=" ml-2 mb-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0,0,300,150"
        className="fill:#E1D4D4; w-8 cursor-pointer hover:scale-110 h-fit"
      >
        <g
          fill="#E1D4D4"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          className="mix-blend-mode: normal"
        >
          <g transform="scale(16,16)">
            <path d="M12.03125,2.02344c-0.49609,0 -0.96484,0.24609 -1.35547,0.63281l-8.11328,8.07031l-1.35547,4.05859l4.05859,-1.35156l0.08594,-0.08203l8.03516,-7.98438c0.38672,-0.39062 0.62891,-0.85937 0.62891,-1.35547c0,-0.49609 -0.24219,-0.96484 -0.62891,-1.35547c-0.39062,-0.38672 -0.85937,-0.63281 -1.35547,-0.63281zM10.02734,4.71094l1.29297,1.29688l-6.59375,6.55469l-1.9375,0.64453l0.64844,-1.94141z"></path>
          </g>
        </g>
      </svg>
    </div>
  );

  const navigate = useNavigate()
  const handleDelete = async (bookID) => {
    await axios
      .post("http://localhost:3000/book/deletebook", {
        _id: bookID,
      })
      .then((res) => {
        toast.success(res.data.message);
        navigate('/admin/managebooks')
      })
      .catch((err) => {
        console.log("Error in handleDelete : ", err);
      });
  };


  const [books, setBooks] = useState([]);
  const [passItem, setpassItem] = useState({});

  useEffect(() => {
    const getBooks = async () => {
      try {
        await axios.get("http://localhost:3000/book/all").then((res) => {
          setBooks(res.data);
          // console.log("Books in RemoveBooks.jsx ",books);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center m-5">Remove and Update the Books</h1>

      <div className="w-full justify-center flex mt-20 ">
      <div className="w-2/3 items-center justify-center flex">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Book Name</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Tittle</th>
              <th className="border px-4 py-2 w-fit">Delete</th>
              <th className="border px-4 py-2 w-fit">Edit</th>
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
                  <td
                    className="border px-4 py-2"
                    onClick={(e) => {
                      handleDelete(item._id);
                    }}
                  >
                    {trashIcon}
                  </td>
                  <td className="border p-1">
                    <div>
                      <a
                        onClick={() => {
                          document.getElementById("my_modal_3").showModal();
                          setpassItem(item);
                          console.log("Item in Remove Books is : ", passItem);
                        }}
                      >
                        {editIcon}
                      </a>
                      <UpdateBook book={passItem} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default RemoveBook;
