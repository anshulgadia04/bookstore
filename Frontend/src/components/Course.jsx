import React, { useEffect, useState } from "react";
import Cards from "./Cards";

import {Link} from 'react-router-dom'
import axios from 'axios'
function Course() {
  const [book,setBook] = useState([]);
  useEffect( ()=>{
    const getBooks = async ()=>{
      try {
        const res = await axios.get("http://localhost:3000/book")
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error in fetchin the data ", error);
      }
    };
    getBooks() 
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 justify-center items-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className=" mt-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officiis assumenda officia quibusdam deleniti eos
            cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet
            ratione temporibus aperiam harum alias officiis assumenda officia
            quibusdam deleniti eos cupiditate dolore doloribus!
          </p>

          <Link to='/'><button className="mt-6 btn btn-secondary">Back</button></Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => {
            return <Cards item={item}/>;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
