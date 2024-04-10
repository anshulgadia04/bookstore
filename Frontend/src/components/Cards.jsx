import React from "react";

function Cards({item}) {

    console.log("Items in Cards.jsx");
    console.log(item);
  return (
    <>
      <div className="mt-10">
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src={item.img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.tittle}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer hover:bg-pink-500 hover:text-white duration-200 px-2 py-1 rounded-xl">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
