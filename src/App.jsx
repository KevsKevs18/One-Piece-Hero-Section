import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import onepiece3 from "@/assets/onepiece3.jpg";
import onepiece1 from "@/assets/onepice1.jpg";
import onepiece2 from "@/assets/onepiece2.jpg";

function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const drinks = [
    {
      name: "Zoro",
      img: onepiece2,
    },
    {
      name: "Luffy",
      img: onepiece1,
    },
    {
      name: "Strong Zoro",
      img: onepiece3,
    },
  ];

  return (
    <>
      <div className="main-content flex w-full min-h-screen sm:px-4 bg-bgColor  flex-col overflow-hidden">
        <div
          className={`flex md:hidden justify-between w-full h-[4rem] border-b-[1px] border-white px-4 items-center ${
            open ? "pl-[7rem]" : "pl-4"
          }`}
        >
          <i className="ri-menu-line" onClick={() => setOpen(!open)}></i>
          <div className="flex">
            <span className="ri-search-2-line"> Search</span>
          </div>
        </div>
        <nav
          className={`md:w-full md:h-[4rem] overflow-hidden fixed md:sticky z-[50] left-0 top-0  h-screen flex flex-col md:flex-row md:items-center md:justify-between md:px-4 lg:px-32 md:py-0 md:border-b-[1px] md:border-white
      ${open ? "w-[6rem] px-5 pt-5 bg-white" : "w-[0rem] "}`}
        >
          <h3 className="font-bold">LOGO</h3>
          <ul className="flex flex-col md:flex-row mt-24 bg-bgColor border-[1px] border-white px-8 py-2 rounded-xl md:mt-0 gap-4 text-black font-medium">
            <li className="">Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="hidden md:flex">
            <span className="ri-search-2-line"> Search</span>
          </div>
        </nav>

        <section className="grid grid-cols-1 grid-rows-auto gap-2 pb-4 w-full grid-areas-mobile md:min-h-screen md:grid-cols-[1fr_1fr] md:grid-areas-layout">
          {/* Left */}

          <div className="[grid-area:details] flex flex-col gap-3 px-4 mt-2 w-full lg:px-8 lg:pt-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Find the <span className="text-green-600">perfect crew</span>{" "}
              waiting <span className="text-green-800">just for you.</span>
            </h1>

            <p className="text-gray-500 max-w-md">
              Join the adventure across the Grand Line with Luffy and his
              friends — a tale of dreams, courage, and endless seas.
            </p>
          </div>

          {/* RIGHT SIDE — Main Image with smooth transition */}
          <div className="[grid-area:rightside] flex justify-center items-center md:items-start lg:pt-12 md:p-4 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={drinks[selected].img}
                src={drinks[selected].img}
                alt={drinks[selected].name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-xl"
              />
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="[grid-area:leftside] flex w-full mt-2 gap-4 justify-center">
            {drinks.map((drink, index) => (
              <img
                key={index}
                src={drink.img}
                alt={drink.name}
                onClick={() => setSelected(index)}
                className={`rounded-xl cursor-pointer object-cover w-20 h-20 md:w-[7rem] md:h-60 lg:w-40 transition-all duration-300 hover:scale-105 
              ${selected === index ? "ring-4 ring-green-300" : ""} `}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
