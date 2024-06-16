import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Silk 'n' Swag Draped in Tradition, Styled for Today!",
    description:
      " Kanchipuram silk saree, is a traditional and exquisite handwoven silk saree originating from the town of Kanchipuram in Tamil Nadu, India.",
  },
  {
    id: 2,
    img: Image2,
    title: "Get upto 50% off on your first order",
    description:
      "Grab the best deals on your first order. Shop now and get 10% off on your first order. Hurry up! Limited time offer.",
  },
  {
    id: 3,
    img: Image3,
    title: "get upto 70% off on Shawls",
    description:
      "Shop from a wide range of Shawls at best prices. Get upto 70% off on Shawls. Hurry up! Limited time offer.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background blur effect */}
       <div className="relative w-full max-w-lg">
      <div className="absolute top-0 -left-4 w-96 h-96 bg-gray-400	 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-gray-300	 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      <div className="absolute top-0 -bottom-8 left-20 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      </div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* content  */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
