import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cardshome from "./Cardshome";

function Freebook() {
  const Freedata = list.filter((data) => data.catagory === "Free");
  //console.log(Freedata);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-0">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Books</h1>
          <p>
            Knowledge is Free, Read These Interesting Books for Free. For More
            Books Please Login/SignUp
          </p>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {Freedata.map((item)=>(
              <Cardshome item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
