import React from "react";
import list from "../../public/list.json";
import Cardshome from "./Cardshome";
import { Link } from "react-router-dom";

function Course() {
  //console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore a world of captivating stories and knowledge at your
            fingertips. Whether you're searching for the latest bestsellers or
            timeless classics, we have something for everyone. Happy reading,
            and thank you for choosing us for your literary journey!
          </p>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            <Link to="/">Back </Link>
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=> (
              <Cardshome key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
