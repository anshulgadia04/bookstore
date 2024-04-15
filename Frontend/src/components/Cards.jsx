import React from "react";
import axios from "axios";
function Cards({item}) {

    console.log("Items in Cards.jsx");
    console.log(item);

    const handlerentnow = async () =>{
      try {
        await axios.post('http://localhost:3000/book/rentbook' , {
          userID : localStorage.getItem("UserID"),
          bookID : item._id
        })
        .then(()=>{
          alert("Book Rented Successfully")
        })
      } catch (error) {
        console.log("Error in handlerentnow : ", error)
      }
    }

  return (
    <>
      <div className="mt-10">
        <div className=" mb-6 text-white card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 border h-[400px] overflow-hidden">
          <figure className=" h-3/4">
            <img
            className="max-w-40 p-5 "
              src={item.image}
              alt="Image is not available"
            />
          </figure>
          <div className="card-body bg-slate-700">
            <h2 className="card-title">
             {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.tittle}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer hover:bg-pink-500 hover:text-white duration-200 px-2 py-1 rounded-xl">
                <button
                onClick={handlerentnow}
                >Rent Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
