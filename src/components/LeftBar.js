import React from "react";
import { CiSettings } from "react-icons/ci";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { FaRegListAlt } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { CgAddR } from "react-icons/cg";

const LeftBar = () => {
  return (
    <div className="app-left">
      <div className="left-bar my-4">
        <div className="d-flex my-2">
          <AiOutlineAppstore className="right-ic fs-3 mx-2" />
          <p>Home</p>
        </div>
        <div className="d-flex my-2">
          <RiMessage2Line className="right-ic fs-3 mx-2" />
          <p>Messages</p>
        </div>
        <div className="d-flex my-2">
          <FaRegListAlt className="right-ic fs-3 mx-2" />
          <p>Tasks</p>
        </div>
        <div className="d-flex my-2">
          <MdPeopleOutline className="right-ic fs-3 mx-2" />
          <p>Members</p>
        </div>
        <div className="d-flex  my-2">
          <CiSettings className="right-ic fs-3 mx-2" />
          <p>Settings</p>
        </div>
      </div>
      <div className="container-fluid mp-class my-4">
        <div className="d-flex left-menu">
          <h6>MY PROJECTS</h6>
          <CgAddR className="right-ic fs-5 mx-5" />
        </div>
        <div className="d-flex flex-row first-project my-2">
          <span className="circle-1 mt-3 mx-2"></span>
          <h6 className="text-dark mt-2 mx-3">Mobile App</h6>
          <BiDotsHorizontalRounded className="right-ic fs-5 mx-3 mt-2" />
        </div>
        <div className="d-flex flex-row my-2">
          <span className="circle-2 mt-3 mx-2"></span>
          <h6 className="text-dark mt-2 mx-3">Website Redesign</h6>
        </div>
        <div className="d-flex flex-row my-2">
          <span className="circle-3 mt-3 mx-2"></span>
          <h6 className="text-dark mt-2 mx-3">Design System</h6>
        </div>
        <div className="d-flex flex-row my-2">
          <span className="circle-4 mt-3 mx-2"></span>
          <h6 className="text-dark mt-2 mx-3">Wireframes</h6>
        </div>
      </div>
      <div>
        <div className="box my-5">
          <h6 className="thought-time">Thoughts Time</h6>
          <p className="text-box">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <div className="input-box">
            <input
              type="text"
              placeholder="Write a message"
              className="padded-placeholder"
            />
          </div>
          <div className="half-circle my-5">
            <div className="bulb">
              <div className="bulb-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
