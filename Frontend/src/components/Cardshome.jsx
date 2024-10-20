import React from "react";

function Cardshome({ item }) {
  //console.log({item})
  return (
    <>
      <div className="mt-4 my-3 p-2">
        <div className="card bg-base-100 w-92 shadow-xl mt-8 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              className="w-full h-96 object-cover"
              src={item.image}
              alt={item.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.catagory}</div>
            </h2>
            <p>{item.name}</p>
            <div className="card-actions justify-between">
              <div className="cursor-pointer px-2 py-1 rounded-full boarder-[2px]">₹{item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full boarder-[2px] hover:bg-pink-500 hover:text-black duration-300">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardshome;
