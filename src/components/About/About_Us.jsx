import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerImg from "../../assets/About.jpg"; // Make sure the path is correct

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const SimpleCard = ({ image, title, description }) => {
    return (
      <div
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex justify-center items-center p-6">
            <img src={image} alt={title} className="w-full h-48 sm:h-auto object-cover"/>
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="about"
      className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container flex justify-center">
        <SimpleCard 
          image={BannerImg} 
          title="ABOUT US" 
          description="Handicrafts have always been of cultural and traditional
          importance to India and their detailed and astonishing designs
          have made them eminent in international markets. We, at Indecraft,
          produce and sell these handicrafts in both Indian and
          international market. To start-up a handicrafts business was not a
          tricky affair, having observed a functioning handicraft business
          for a long time gave an edge on the perceptive about the business.
          The world is more inclined to social networking, virtual
          conversations and everything we need is just a click away. And
          what could be a better way than to go online to tell stories about
          the techniques and methods used in bringing these artefacts to
          life. Often, we neglect the fact that there is so much more to
          handicrafts rather than just a final product in a showroom or a
          display on a website."
        />
      </div>
    </div>
  );
};

export default About;
