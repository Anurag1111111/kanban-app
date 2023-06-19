import React, { useState } from "react";
import pencil from "../assets/pencil.png";
import link from "../assets/link.png";
import { CgAddR, CgFileRemove } from "react-icons/cg";
import image1 from "../assets/Ellipse 12.png";
import image2 from "../assets/Ellipse 13.png";
import image3 from "../assets/Ellipse 15.png";
import image4 from "../assets/Ellipse 14.png";
import image5 from "../assets/img-2.png";
import image6 from "../assets/unsplash.png";
import image7 from "../assets/unsplash-1.png";
import image8 from "../assets/unsplash-2.png";
import image9 from "../assets/unsplash-3.png";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePermContactCalendar, MdPeopleOutline } from "react-icons/md";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
import { GrAppsRounded } from "react-icons/gr";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";

const MainPage = () => {
  const [div1Cards, setDiv1Cards] = useState([
    {
      id: 1,
      badge: "Low",
      title: "Brainstorming",
      desc: "Brainstorming brings team members' diverse experience into play.",
      value: 12,
      files: 0,
      image1: [image1, image2, image3],
    },
    {
      id: 2,
      badge: "High",
      title: "Research",
      desc: "User research helps you to create an optimal product for users.",
      value: 10,
      files: 3,
      image1: [image2, image1],
    },
    {
      id: 3,
      badge: "High",
      title: "Wireframes",
      desc: "Low fidelity wireframes include the most basic content and visuals.",
      value: 17,
      files: 7,
      image1: [image1, image5, image3],
    },
  ]);
  const [div2Cards, setDiv2Cards] = useState([
    {
      id: 4,
      badge: "Low",
      title1: "Onboarding Illustrations",
      value: 14,
      files: 15,
      image: [image6],
      image1: [image1, image2, image3],
    },
    {
      id: 5,
      badge: "Low",
      title1: "Moodboard",
      value: 9,
      files: 10,
      image3: [],
      image: [image7, image8],
      image1: [image2],
    },
  ]);
  const [div3Cards, setDiv3Cards] = useState([
    {
      id: 6,
      badge1: "Completed",
      title2: "Mobile App Design",
      value: 14,
      files: 15,
      image4: [image9],
      image1: [image1, image2],
    },
    {
      id: 7,
      badge1: "Completed",
      title2: "Design System",
      desc1: "It just needs to adapt the UI from what you did before.",
      value: 9,
      files: 10,
      image4: [],
      image1: [image2, image3, image4],
    },
  ]);

  const handleDragStart = (e, cardId, sourceDivId) => {
    e.dataTransfer.setData("cardId", cardId);
    e.dataTransfer.setData("sourceDivId", sourceDivId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetDivId) => {
    const cardId = e.dataTransfer.getData("cardId");
    const sourceDivId = e.dataTransfer.getData("sourceDivId");

    if (sourceDivId === "div1") {
      if (targetDivId === "div2") {
        const updatedDiv1Cards = div1Cards.filter(
          (card) => card.id.toString() !== cardId
        );
        const movedCard = div1Cards.find(
          (card) => card.id.toString() === cardId
        );
        setDiv2Cards([...div2Cards, movedCard]);
        setDiv1Cards(updatedDiv1Cards);
      } else if (targetDivId === "div3") {
        const updatedDiv1Cards = div1Cards.filter(
          (card) => card.id.toString() !== cardId
        );
        const movedCard = div1Cards.find(
          (card) => card.id.toString() === cardId
        );
        setDiv3Cards([...div3Cards, movedCard]);
        setDiv1Cards(updatedDiv1Cards);
      }
    } else if (sourceDivId === "div2") {
      if (targetDivId === "div1") {
        const updatedDiv2Cards = div2Cards.filter(
          (card) => card.id.toString() !== cardId
        );
        const movedCard = div2Cards.find(
          (card) => card.id.toString() === cardId
        );
        setDiv1Cards([...div1Cards, movedCard]);
        setDiv2Cards(updatedDiv2Cards);
      } else if (targetDivId === "div3") {
        const updatedDiv2Cards = div2Cards.filter(
          (card) => card.id.toString() !== cardId
        );
        const movedCard = div2Cards.find(
          (card) => card.id.toString() === cardId
        );
        setDiv3Cards([...div3Cards, movedCard]);
        setDiv2Cards(updatedDiv2Cards);
      }
    } else if (sourceDivId === "div3") {
      if (targetDivId === "div1") {
        const updatedDiv3Cards = div3Cards.filter(
          (card) => card.id.toString() !== cardId
        );
        const movedCard = div3Cards.find(
          (card) => card.id.toString() === cardId
        );
        setDiv1Cards([...div1Cards, movedCard]);
        setDiv3Cards(updatedDiv3Cards);
      } else if (targetDivId === "div2") {
        const updatedDiv3Cards = div3Cards.filter(
          (card) => card.id.toString() !== cardId
        );
        const movedCard = div3Cards.find(
          (card) => card.id.toString() === cardId
        );
        setDiv2Cards([...div2Cards, movedCard]);
        setDiv3Cards(updatedDiv3Cards);
      }
    }
  };

  return (
    <div className="main-page my-5">
      <div className="d-flex margin-to-give">
        <h1 className="mobile-app">Mobile App</h1>
        <div>
          <img
            className="pencil-background my-3 mx-3"
            src={pencil}
            alt="pencil"
          />
        </div>
        <img className="link-background my-3" src={link} alt="link" />
        <div className="m-auto margin-to-give1 d-flex">
          <CgAddR className="right-ic plus-hide mt-3 fs-5 mx-3" />
          <h6 className="text-primary mt-3">Invite</h6>
          <div className="image-container mx-4 mb-2">
            <img src={image2} className="mt-2" alt="image2" />
            <img src={image4} className="mt-2" alt="image4" />
            <img src={image3} className="mt-2" alt="image3" />
            <img src={image1} className="mt-2" alt="image1" />

            <span className="profile-image-1 mt-2 text-center">+2</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row my-4 b-icon">
        <div className="dropdown">
          <div className="dropbtn text-center align-items-center">Filter</div>
          <CiFilter className="filter fs-4 mx-1" />
          <IoIosArrowDown className="arrow fs-4" />
        </div>
        <div className="dropdown left-button">
          <div className="dropbtn text-center align-items-center">Today</div>
          <MdOutlinePermContactCalendar className="filter fs-4 mx-1" />
          <IoIosArrowDown className="arrow fs-4" />
        </div>
        <div className="dropdown1 d-flex pb-3">
          <span className="dropbtn1 mx-2">Share</span>
          <MdPeopleOutline className="filter1 fs-4 mx-1" />
          <div className="right-small-line mx-1"></div>
        </div>

        <RiCheckboxIndeterminateLine className="blue-icon mx-4 my-2" />
        <GrAppsRounded className="right-ic fs-3 my-1" />
      </div>
      <div>
        <div className="row w-100">
          <div className="col-12 col-md-4">
            <div className="box1">
              <BiDotsHorizontalRounded className="right-ic box1-dots fs-5" />
              <div className="first-to-do-box mx-3">
                <span className="circle-5"></span>
                <p className="to-do">To Do</p>
                <span className="badge badge-p">4</span>
                <CgAddR className="right-ic plus-button fs-5" />
              </div>
              <div
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "div1")}
                id="div1"
                style={{
                  width: "300px",
                  margin: "10px",
                }}
              >
                {div1Cards.length > 0 ? (
                  div1Cards.map((card) => (
                    <div
                      key={card.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, card.id, "div1")}
                      className="drag-first"
                      style={{
                        backgroundColor: "white",
                        padding: "80px",
                        borderRadius: "10px",
                        margin: "10px",
                      }}
                    >
                      <BiDotsHorizontalRounded className="right-ic box1-dots fs-5" />
                      <span className="badge badge-abs">{card.badge}</span>
                      <span className="badge badge-abs">{card.badge1}</span>
                      <div className="d-flex hop h-100">
                        {Array.isArray(card.image4) &&
                          card.image4.map((i, index) => {
                            return (
                              <img
                                className="three-completed h-100 mb-0"
                                key={index}
                                src={i}
                                alt={i.id}
                              />
                            );
                          })}
                        {Array.isArray(card.image) &&
                          card.image.map((i, index) => {
                            return (
                              <img
                                className="h-100"
                                key={index}
                                src={i}
                                alt={i.id}
                              />
                            );
                          })}
                      </div>
                      <h6 className="card-title">{card.title}</h6>
                      <h6 className="card-title-1 pt-3">{card.title1}</h6>
                      <h6 className="card-title-1 pt-3">{card.title2}</h6>
                      <p className="card-desc">{card.desc1}</p>
                      <p className="card-desc">{card.desc}</p>
                      <div>
                        <div className="d-flex image-container1 images-box-1 my-3">
                          {card.image1.map((i, index) => {
                            return <img key={index} src={i} alt={i.id} />;
                          })}
                        </div>
                        <div className="d-flex comments-value">
                          <TbMessageDots className="fs-5 mx-1" />
                          <p className="comments mt-1">
                            {card.value}&nbsp; Comments
                          </p>
                        </div>
                        <div className="d-flex comments-value-1">
                          <CgFileRemove className="fs-5" />
                          <p className="comments mt-1 mx-1">
                            {card.files}&nbsp; Files
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h6>No Cards to display</h6>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="box1">
              <div className="second-to-do-box mx-3">
                <span className="circle-6"></span>
                <p className="to-do">On Progress</p>
                <span className="badge badge-p on-progress">3</span>
              </div>
              <div
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "div2")}
                id="div2"
                style={{
                  width: "300px",
                  margin: "10px",
                }}
              >
                {div2Cards.length > 0 ? (
                  div2Cards.map((card) => (
                    <div
                      key={card.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, card.id, "div2")}
                      className="drag-first"
                      style={{
                        backgroundColor: "white",
                        padding: "80px",
                        borderRadius: "10px",
                        margin: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <BiDotsHorizontalRounded className="right-ic box1-dots fs-5" />
                      <span className="badge badge-abs">{card.badge}</span>
                      <span className="badge badge-abs">{card.badge1}</span>
                      <h6 className="card-title">{card.title}</h6>
                      <p className="card-desc">{card.desc}</p>
                      <p className="card-desc">{card.desc1}</p>
                      <h6 className="card-title-1 pt-0">{card.title1}</h6>
                      <h6 className="card-title-1 pt-2">{card.title2}</h6>
                      <div className="d-flex hop h-100">
                        {Array.isArray(card.image4) &&
                          card.image4.map((i, index) => {
                            return (
                              <img
                                className="three-completed mb-0"
                                key={index}
                                src={i}
                                alt={i.id}
                              />
                            );
                          })}
                        {Array.isArray(card.image) &&
                          card.image.map((i, index) => {
                            return (
                              <img
                                className="h-100 flower-width"
                                key={index}
                                src={i}
                                alt={i.id}
                              />
                            );
                          })}
                      </div>
                      <div>
                        <div className="d-flex image-container1 images-box-1 mt-3 pb-0">
                          {card.image1.map((i, index) => {
                            return (
                              <img
                                className="mt-3"
                                key={index}
                                src={i}
                                alt={i.id}
                              />
                            );
                          })}
                        </div>
                        <div className="d-flex comments-value">
                          <TbMessageDots className="fs-5 mx-1 mt-1" />
                          <p className="comments mt-1 pt-1">
                            {card.value}&nbsp; Comments
                          </p>
                        </div>
                        <div className="d-flex comments-value-1">
                          <CgFileRemove className="fs-5 mt-1" />
                          <p className="comments mt-1 mx-1 pt-1">
                            {card.files}&nbsp; Files
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h6>No Cards to display</h6>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="box1">
              <div className="third-to-do-box mx-3">
                <span className="circle-7"></span>
                <p className="to-do">Done</p>
                <span className="badge badge-p">2</span>
              </div>
              <div
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "div3")}
                id="div3"
                style={{
                  width: "305px",
                  margin: "10px",
                }}
              >
                {div3Cards.length > 0 ? (
                  div3Cards.map((card) => (
                    <div
                      key={card.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, card.id, "div3")}
                      className="drag-first"
                      style={{
                        backgroundColor: "white",
                        padding: "20px 7px",
                        borderRadius: "10px",
                        margin: "10px",
                      }}
                    >
                      <BiDotsHorizontalRounded className="right-ic box1-dots fs-5" />
                      <span className="badge text-success badge-abs">
                        {card.badge1}
                      </span>
                      <span className="badge badge-abs">{card.badge}</span>
                      <h6 className="card-title-1 pt-3">{card.title2}</h6>
                      <h6 className="card-title-1 pt-3">{card.title1}</h6>
                      <h6 className="card-title-1 pt-3">{card.title}</h6>
                      <p className="card-desc">{card.desc}</p>
                      <p className="description pt-5 mt-2 mb-0 h-100">
                        {card.desc1}
                      </p>
                      <div className="d-flex hop h-100">
                        {Array.isArray(card.image) &&
                          card.image.map((i, index) => {
                            return (
                              <img
                                className="h-100"
                                key={index}
                                src={i}
                                alt={i.id}
                              />
                            );
                          })}
                      </div>
                      <div className="hop h-100 mb-0 pb-5">
                        {Array.isArray(card.image4) &&
                          card.image4.map((i, index) => {
                            return (
                              <img
                                className="three-completed mb-0"
                                key={index}
                                src={i}
                                alt={i.id}
                              />
                            );
                          })}
                      </div>
                      <div>
                        <div className="d-flex image-container1 images-box-2 my-3">
                          {card.image1.map((i, index) => {
                            return <img key={index} src={i} alt={i.id} />;
                          })}
                        </div>
                        <div className="d-flex comments-value">
                          <TbMessageDots className="fs-5 mx-1 mt-2" />
                          <p className="comments mt-2 pt-1">
                            {card.value}&nbsp; Comments
                          </p>
                        </div>
                        <div className="d-flex comments-value-1">
                          <CgFileRemove className="fs-5 mt-2" />
                          <p className="comments mt-2 pt-1 mx-1">
                            {card.files}&nbsp; Files
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h6>No Cards to display</h6>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
