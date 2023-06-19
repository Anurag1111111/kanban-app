import React from "react";
import "../App.css";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { RxCalendar } from "react-icons/rx";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { BiMessageEdit } from "react-icons/bi";
import image from "../assets/img-1.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className="icon-container">
        <div className="d-flex left-bar top-left-portion">
          <span className="icon-1 mt-4"></span>
          <span className="icon-2 mt-4"></span>
          <span className="icon-3 mt-4"></span>
          <h6 className="project mt-4">Project M.</h6>
          <HiOutlineChevronDoubleLeft className="left-arrow mt-4 fs-5" />
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="sec-nav"
            placeholder="Search for anything..."
          />
          <CiSearch className="search-icon fs-3 gap-10" />
        </div>
        <div className="d-flex right-nav-info">
          <RxCalendar className="fs-5 mx-2 res mt-3 right-ic" />
          <BiMessageEdit className="fs-4 mx-2 res mt-3 right-ic" />
          <CiBellOn className="fs-4 mx-2 mt-3 res right-ic" />
          <div className="d-flex flex-column profile-info mx-4 mt-2">
            <h6 className="name">Anima Agrawal</h6>
            <p className="p-0 text-end">U.P, India</p>
          </div>
          <img src={image} className="profile-image mt-2" alt="Anima Agrawal" />
          <IoIosArrowDown className="right-ic fs-4 mt-4 mx-3" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
