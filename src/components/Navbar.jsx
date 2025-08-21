import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import styles from "./Navbar.module.css";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-[#141416] text-white h-[100px]">
        <div className="flex items-center ml-[7%] w-full">
          <div className={`text-2xl font-bold ${styles.fleet}`}>
            fleet
          </div>
          <select name="" id="" className="text-[#777e90] p-2 rounded cursor-pointer ml-4">
            <option value="" className="bg-[#141416] text-[#fff]">Travelers</option>
            <option value="1" className="bg-[#141416] text-[#fff]">Option 1</option>
            <option value="2" className="bg-[#141416] text-[#fff]">Option 2</option>
            <option value="3" className="bg-[#141416] text-[#fff]">Option 3</option>
          </select>
        </div>

        <div className="flex items-center space-x-4  w-[80%]">
          <a href="#" className="hover:text-gray-400 mr-[25px]">
            Support
          </a>
          <a href="#" className="hover:text-gray-400 ml-[0px] mr-[25px] flex items-center">
            <MdLanguage />
            <span className="ml-[6px]">Language</span>
          </a>
          <a href="#" className="hover:text-gray-400 border-[2px] border-[#777e90] px-4 py-2 rounded-[30px] mr-[25px]">
            List your property
          </a>
          <IoIosNotificationsOutline className="text-2xl hover:text-gray-400 cursor-pointer mr-[25px]" />
          <a href="#" className="hover:text-gray-400">
            <img src="./assets/imgs/person.png" alt="your profile" className="w-[40px] "/>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
