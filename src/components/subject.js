import React from "react";
import math from "../asset/maths.svg";
import Physics from "../asset/physics.svg";
import chemistry from "../asset/chemistry.svg";
import biology from "../asset/biology.svg";
import "../components/homepage.css";

const Subject = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2 card m-3 p-2">
          <img src={math} alt="" width="100px" className="subject" />
          <p className=" pt-3 caption">Maths</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2 card m-3 p-2">
          <img src={Physics} alt="" width="100px" className="subject" />
          <p className=" pt-3 caption">Physics</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2 card m-3 p-2">
          <img src={chemistry} alt="" width="100px" className="subject" />
          <p className=" pt-3 caption">Chemistry</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2 card m-3 p-2">
          <img src={biology} alt="" width="100px" className="subject" />
          <p className=" pt-3 caption">Biology</p>
        </div>
      </div>
      <div className="view-button py-2">
        <button className="btn btn-lg btn-danger">View all</button>
      </div>
    </div>
  );
};

export default Subject;
