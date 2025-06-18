import React from "react";
import Navbar  from "./Navbar";
import { Link } from "react-router-dom";

const Content = () => {
  return (

    <div>
            <Navbar /> 
      <div className="bg"></div>

      <div className="girl">
        <div className="pic">
          <img src="girl.png" alt="" />
        </div>

        <div className="text">
          <div className="t-h">
            <h3 className="heading">Discover your ideal eyewear style</h3>
          </div>

          <div className="t-p">
            <p className="paragraph">
              “We Specialize in discovering your ideal <br /> match. Discover
              the transformative impact <br /> a perfect pairing can have. Let’s
              uncover <br /> your collaboratively”
            </p>
          </div>
        </div>

        <div className="button">
          <div className="buttonn">
            <button type="buttonn" className="sun">
              sun
            </button>

            <button type="buttonn" className="optical">
              optical
            </button>

            <button type="buttonn" className="antirad">
              antirad
            </button>
          </div>
          <br />

          <div className="par">
            {" "}
            <p>The lightest optical frames around.</p>
          </div>
        </div>
      </div>

      <div className="bgg">
        <div className="hh">
          <h2 className="head">New Arrivals</h2>
        </div>

        <div className="paa">
          <p className="parag">
            Unveil Our Newest Eyewear Arrivals and Elevate <br /> Your Look with
            the Latest Trends and Designs. <br /> Discover a World of
            Fashion-forward Frames <br /> Waiting Just for You!
          </p>{" "}
          <br />
          <div className="b">
            <button type="button" className="bb">
              Learn more
            </button>
          </div>
        </div>

        <div className="glasses">
          <Link to="/sunn" className="card ">
            <img src="Sun.jpg" alt="sun" />

            <p className="label">sun</p>
          </Link>

          <Link to="/optical" className="card ">
            <img src="Optical.jpg" alt="optical" />

            <p className="label">optical</p>
          </Link>

          <div className="card">
            <img src="Antirad.jpg" alt="anti rad" />
            <p className="label">anti rad</p>
          </div>
        </div>
        <div className="upl">
          <button type="button" className="but">
            Upload image
          </button>
          <br />
          <button type="button" className="butt">
            Camera
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
