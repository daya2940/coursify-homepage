import React from "react";
import studentDoubt from "../asset/studentdoubt.svg";
import education from "../asset/education.svg";
import task from "../asset/task.svg";
import { Carousel } from "react-responsive-carousel";
const Carousels = () => {
  return (
    <div>
      <Carousel className="container py-4">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <img src={studentDoubt} width="100px" alt="" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <p>Micro concept videos</p>
            <p>
              Find multilinguial video explanations important and frequently
              confused topics from eaxh subject
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <img src={education} width="100px" alt="" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <p>Micro concept videos</p>
            <p>
              Find multilinguial video explanations important and frequently
              confused topics from eaxh subject
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <img src={task} width="100px" alt="" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <p>Micro concept videos</p>
            <p>
              Find multilinguial video explanations important and frequently
              confused topics from eaxh subject
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
