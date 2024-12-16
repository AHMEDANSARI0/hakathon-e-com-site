import React from "react";

// Data Array for Cards
const card1 = [
  {
    title: "Bedroom",
    image: "/bedroom.png",
  },
  {
    title: "Dinning",
    image: "/dinning.png",
  },
  {
    title: "Living",
    image: "/living.png",
  },
];
const cardData = [
  {
    title: "Syltherine",
    description: "Stylish Cafe Chair",
    price:"21,900",
    image: "/card1.png",
  },
  {
    title: "Lolito",
    description: "Luxury Full Size Sofa",
    price:"47,999",
    image: "/card2.png",
  },
  {
    title: "Leviosa",
    description: "Unique Corner Sofa",
    price:"78,999",
    image: "/card3.jpeg",
  },
  {
    title: "Grifo",
    description:"Moderan Night Lamp",
    price:"49,999",
    image: "/card4.png",
  },
  {
    title: "Muggo",
    description: "Small Mug",
    price:"58,999",
    image: "/card5.png",
  },
  {
    title: "Pinky",
    description: "Cute Bed Set",
    price:"52,999",
    image: "/card6.jpeg",
  },
  {
    title: "Two Section Sofa",
    description: "Brown Comfortable Sofa",
    price:"38,999",
    image: "/card7.jpeg",
  },
  {
    title: "Dinning Table",
    description: "6 Persons Dinning Table",
    price:"35,000",
    image: "/card8.png",
  },
];


const HeroSection = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
  className="bg-cover bg-center items-center justify-end p-28 w-auto h-screen flex"
  style={{ backgroundImage: "url('/background.jpeg')" }}
>
  <div
    className="hidden md:flex bg-orange-100 absolute border-yellow-500 items-center box-border border-4 rounded-2xl"
    style={{
      top: "60%", 
      right: "10%", 
      transform: "translateY(-50%)", 
    }}
  >
    <div
      className="p-6 md:p-8 lg:p-10"
      style={{
        width: "80%", // Default for smaller screens
        maxWidth: "500px", // Adjust size for larger screens
      }}
    >
      <p className="text-2xl md:text-3xl font-sans font-light mb-4">
        New Arrival
      </p>
      <h1 className="text-yellow-500 text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
        Discover Our New Collection
      </h1>
      <p className="text-black text-sm md:text-base lg:text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <button className="bg-yellow-500 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-md hover:bg-yellow-600 transition-all duration-300">
        BUY NOW
      </button>
    </div>
  </div>
</div>

          {/* range section */}
      <div className=" bg-white py-10">
        <h6 className="text-center text-3xl sm:text-4xl mb-10 font-extralight ">
        Browse The Range
        </h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-14 px-4 max-w-7xl mx-auto">
          {card1.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-sm p-5 hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-t-lg h-96 w={381px} object-cover"
              />
              <h3 className="text-2xl text-center font-sans mt-4">{card.title}</h3>
            </div>
          ))}
        </div> 
      </div>
   

      {/* Cards Section */}
      <div className="bg-gray-100 py-10">
        <h2 className="text-center text-3xl sm:text-4xl mb-8 font-extralight">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg md:mt-6 md:ml-9 rounded-md p-3 hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-t-md h-72 w-full object-cover"
              />
              <h3 className="text-xl text-left font-bold ml-3 mt-3">{card.title}</h3>
              <h4 className="text-base text-left font-normal ml-3 mt-1 text-gray-500">{card.description}</h4>
              <h6 className="text-left text-xl text-black font-bold ml-3 mt-3">Price: {card.price} /-</h6>
            </div>))}
            <div className="flex justify-center place-items-center w-full lg:ml-[490px] h-40">
  <button className="bg-transparent px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 
                     rounded-md border-4 border-yellow-600 hover:bg-yellow-600 
                     transition-all duration-300 text-sm md:text-base lg:text-lg">
    Show More
  </button>
</div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-orange-100 text-center h-auto lg:h-[750px] items-center lg:items-start">
  {/* Left Section */}
  <div className="lg:w-1/2 text-left p-6 lg:p-16 lg:pt-[20%]">
    <h6 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
      50+ Beautiful rooms inspiration
    </h6>
    <p className="text-slate-500 text-base md:text-lg">
      Our designer already made a lot of beautiful prototype of rooms that inspire you.
    </p>
    <div className="pt-10">
    <button className="bg-transparent px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border-4 border-yellow-600 hover:bg-yellow-600 transition-all duration-300 text-sm md:text-base lg:text-lg">
                 Explore More
                  </button>
    </div>
  </div>

  {/* Right Section */}
  <div className="lg:w-1/2 p-10 ">
    <img
      src="section3.png"
      alt="Room Inspiration"
      className="rounded-lg  w-full lg:w-auto h-auto lg:max-w-md"
    />
  </div>
</div>

    </div>
  );
};

export default HeroSection;
