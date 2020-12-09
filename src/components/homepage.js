import React from "react";
import artboard from "../asset/artboard.svg";
import doubts from "../asset/doubt.svg";
import booksCovered from "../asset/booksCovered.svg";
import stateboard from "../asset/stateboard.svg";
import tutorialVideo from "../asset/tutorialVideo.svg";
import access from "../asset/access.svg";
import download from "../asset/download.svg";
import task from "../asset/task.svg";
import studentDoubt from "../asset/studentdoubt.svg";
import education from "../asset/education.svg";
import artboard1 from "../asset/artboard1.svg";
import { FaGreaterThan } from "react-icons/fa";
import "../components/homepage.css";
import Carousels from "./carousel";
import Subject from "./subject";

const Homepage = () => {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <p>Clarify your doubts in your language</p>
            <button className="btn btn-lg btn-danger">
              Ask your doubts now
            </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 video">
            <video width="320" height="240" controls>
              <source
                src="https://www.dailymotion.com/video/x5tpfj5"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="row">
          <div class="card col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <img src={doubts} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">40,000+</h5>
              <p class="card-text">Doubts cleared</p>
            </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <img src={stateboard} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <img src={tutorialVideo} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <img src={booksCovered} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <p className="doubt-title">solve your doubt faster</p>
            <div className="row">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <img src={access} alt="" width="100px" />
              </div>
              <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <p>Aceessible everywhere</p>
                <p>Access to quality education anywhere anytime</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <img src={download} alt="" width="100px" />
              </div>
              <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <p>1 million+ videos</p>
                <p>Unlimited access to video solution</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={artboard} alt="" width="300px" />
          </div>
        </div>
        <div className="caption">
          <p>How it works ?</p>
        </div>
        <div className="row py-5">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <img src={studentDoubt} width="300px" height="270px" alt="" />
            <div className="caption my-2">
              <p>Have a doubt</p>
            </div>
          </div>
          <div>
            <div className="col-xl-1">
              {/* <FaGreaterThan width="300px" /> */}
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <img src={task} width="300px" alt="" />
            <div className="caption my-3">
              <p>Type you question OR Upload an image</p>
            </div>
          </div>
          <div className="col-xl-1">
            {/* <FaGreaterThan width="300px" /> */}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 py-3">
            <img src={education} width="300px" height="270px" alt="" />
            <div className="caption my-2">
              <p>Get your solution!</p>
            </div>
          </div>
        </div>
        <div className="caption">
          <button className="btn btn-danger">Clarify your doubts now!</button>
        </div>
        <p className="caption py-5">Live classes</p>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={artboard1} alt="" width="300px" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="row">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <img src={access} alt="" width="50px" />
              </div>
              <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <p>Aceessible everywhere</p>
                <p>Access to quality education anywhere anytime</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <img src={download} alt="" width="50px" />
              </div>
              <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <p>Expert Teachers</p>
                <p>Unlimited access to video solution</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <img src={download} alt="" width="50px" />
              </div>
              <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <p>Interactive session</p>
                <p>small group for maximum student-teacher interaction</p>
              </div>
            </div>
          </div>
        </div>
        <p className="caption pt-5">FIRST CLASS FREE</p>
        <div className="caption py-2">
          <button className="btn btn-lg btn-danger caption">
            Book a class now!
          </button>
        </div>
        <div>
          <Carousels />
          <div className="caption pb-4">
            <button className="btn btn-lg btn-danger">
              Prepare for JEE now
            </button>
          </div>
        </div>
        <div>
          <p className="caption">Neet preparation</p>
          <Carousels />
        </div>
        <div className="py-3">
          <p className="caption pt-5">Explore the subject with us</p>
          <Subject />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
