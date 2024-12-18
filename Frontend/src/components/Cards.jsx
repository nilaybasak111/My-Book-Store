import React from "react";

function Cards({ item }) {
  //console.log(item)
  return (
    <>
      <div className="mt-6 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
          <figure className="relative w-full h-96">
            <img src={item.image} alt={item.title} className="absolute top-0 left-0 w-full h-full object-cover"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.catagory}</div>
            </h2>
            <p>{item.name}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹{item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full boarder-[2px] hover:bg-pink-500 hover:text-white duration-300">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
