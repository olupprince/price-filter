import React from "react";
import "./style.css";
import image1 from "./photosnap.png";
import image2 from "./manage.png";
import image3 from "./account.png";
import image4 from "./myhome.png";
import image5 from "./loop-studios.png";
import image6 from "./faceit.png";
import image7 from "./shortly.png";
import image8 from "./insure.png";
import image9 from "./eyecam-co.png";
import image10 from "./the-air-filter-company.png";

function Filter() {
  return (
    <div>
      <div className="header"></div>

      <div className="smallcontainer">
        <img className="image" src={image1} />
        <div className="text">
          <h3 className="one">Photosnap </h3>
          <div className="btn">
            <button className="btn-one">NEW</button>
            <button className="btn-two">FEATURED</button>
          </div>
          <div class="front">
            <button className="btn-three">Frontend</button>
            <button className="btn-four">Senior</button>
            <button className="btn-five">Html</button>
            <button className="btn-six">Css</button>
            <button className="btn-seven">Javascript</button>
          </div>
        </div>
        <div className="dev">
          <h3>Senior Frontend Developer</h3>
        </div>
        <div className="ago">
          <p>1d ago . Full Time . USA only</p>
        </div>
      </div>
      <div className="smallcontainer">
        <img className="image" src={image2} />
        <div className="text">
          <h3 className="one">Manage </h3>
          <div className="btn">
            <button className="btn-one">NEW</button>
            <button className="btn-two">FEATURED</button>
          </div>
          <div id="front2" class="front">
            <button className="btn-three">Fullstack</button>
            <button className="btn-four">Midnight</button>
            <button className="btn-five">Python</button>
            <button className="btn-six">React</button>
            {/* <button className="btn-seven">Javascript</button> */}
          </div>
        </div>
        <div className="dev">
          <h3>Fullstack Developer</h3>
        </div>
        <div className="ago">
          <p id="ago2">1d ago . Part Time . Remote</p>
        </div>
      </div>
      <div className="smallcontainer">
        <img className="image" src={image3} />
        <div className="text">
          <h3 className="one">Account</h3>
          <div className="btn">
            <button className="btn-one">NEW</button>
            {/* <button className="btn-two">FEATURED</button> */}
          </div>
          <div id="front3" class="front">
            <button className="btn-three">Frontend</button>
            <button className="btn-four">Junior</button>
            <button id="btn5" className="btn-five">
              JavaScript
            </button>
            <button className="btn-six">React</button>
            <button id="btn7" className="btn-seven">
              Sass
            </button>
          </div>
        </div>
        <div className="dev">
          <h3>Junior Frontend Developer</h3>
        </div>
        <div className="ago">
          <p>2d ago . Part Time . USA only</p>
        </div>
      </div>
      <div className="smallcontainer">
        <img className="image" src={image4} />
        <div className="text">
          <h3 className="one">MyHome</h3>
          <div className="btn">
            {/* <button className="btn-one">NEW</button>
            <button className="btn-two">FEATURED</button> */}
          </div>
          <div id="front4" class="front">
            <button className="btn-three">Frontend</button>
            <button className="btn-four">Junior</button>
            {/* <button className="btn-five">Html</button> */}
            <button className="btn-six">Css</button>
            <button className="btn-seven">Javascript</button>
          </div>
        </div>
        <div className="dev">
          <h3>Junior Frontend Developer</h3>
        </div>
        <div className="ago">
          <p>5d ago . Contract . USA only</p>
        </div>
      </div>
      <div className="smallcontainer">
        <img className="image" src={image5} />
        <div className="text">
          <h3 className="one">LoopStudios</h3>
          <div className="btn">
            {/* <button className="btn-one">NEW</button>
            <button className="btn-two">FEATURED</button> */}
          </div>
          <div id="front5" class="front">
            <button className="btn-three">Fullstack</button>
            <button id="btn5" className="btn-four">
              Midweight
            </button>
            <button id="btn5" className="btn-five">
              JavaScript
            </button>
            <button className="btn-six">Ruby</button>
            <button className="btn-seven">Sass</button>
          </div>
        </div>
        <div className="dev">
          <h3>Software Engineer</h3>
        </div>
        <div id="ago5" className="ago">
          <p>1w ago . Full Time . Worldwide</p>
        </div>
      </div>
      <div className="smallcontainer">
        <img className="image" src={image6} />
        <div className="text">
          <h3 className="one">FaceIt</h3>
          <div className="btn">
            {/* <button className="btn-one">NEW</button>
            <button className="btn-two">FEATURED</button> */}
          </div>
          <div id="front6" class="front">
            <button className="btn-three">Backend</button>
            <button className="btn-four">Junior</button>
            <button className="btn-five">Ruby</button>
            <button className="btn-six">RoR</button>
            {/* <button className="btn-seven">Backend</button> */}
          </div>
        </div>
        <div className="dev">
          <h3>Junior Backend Developer</h3>
        </div>
        <div id="ago6" className="ago">
          <p>2w ago . Full Time . UK only</p>
        </div>
      </div>
      <div className="smallcontainer">
        <img className="image" src={image7} />
        <div className="text">
          <h3 className="one">Shortly</h3>
          <div className="btn">
            {/* <button className="btn-one">NEW</button>
            <button className="btn-two">FEATURED</button> */}
          </div>
          <div id="front7" class="front">
            <button className="btn-three">Frontend</button>
            <button className="btn-four">Junior</button>
            <button className="btn-five">Html</button>
            <button id="btn6" className="btn-six">
              Javascript
            </button>
            <button className="btn-seven">Sass</button>
          </div>
        </div>
        <div className="dev">
          <h3>Junior Developer</h3>
        </div>
        <div id="ago7" className="ago">
          <p>2w ago . Full Time . Worldwide</p>
        </div>
      </div>
      <div className="smallcontainer">
        <img className="image" src={image8} />
        <div className="text">
          <h3 className="one">Insure</h3>
          <div className="btn">
            {/* <button className="btn-one">NEW</button>
            <button className="btn-two">FEATURED</button> */}
          </div>
          <div id="front8" class="front">
            <button className="btn-three">Frontend</button>
            <button className="btn-four">Junior</button>
            <button id="btnn" className="btn-five">
              Javascript
            </button>
            <button className="btn-six">Vue</button>
            <button className="btn-seven">Sass</button>
          </div>
        </div>
        <div className="dev">
          <h3>Junior Frontend Developer</h3>
        </div>
        <div className="ago">
          <p>2w ago . Full Time . USA only</p>
        </div>
      </div>
      <div className="smallcontainer">
        <img className="image" src={image9} />
        <div className="text">
          <h3 className="one">EyecamCo.</h3>
          <div className="btn">
            {/* <button className="btn-one">NEW</button>
            <button className="btn-two">FEATURED</button> */}
          </div>
          <div id="front9" class="front">
            <button className="btn-three">Fullstack</button>
            <button id="btnnn" className="btn-four">
              Midweight
            </button>
            <button id="btnnn" className="btn-five">
              JavaScript
            </button>
            <button className="btn-six">Python</button>
            <button className="btn-seven">Django</button>
          </div>
        </div>
        <div className="dev">
          <h3>Full Stack Engineer</h3>
        </div>
        <div id="ago9" className="ago">
          <p>3w ago . Full Time . Worldwide</p>
        </div>
      </div>
      <div className="smallcontainer">
        <img className="image" src={image10} />
        <div className="text">
          <h3 className="one">TheAirFilterCompany</h3>
          <div className="btn">
            {/* <button className="btn-one">NEW</button>
            <button className="btn-two">FEATURED</button> */}
          </div>
          <div id="front10" class="front">
            <button className="btn-three">Frontend</button>
            <button className="btn-four">Junior</button>
            <button id="btnnn" className="btn-five">
              Javascript
            </button>
            <button className="btn-six">React</button>
            <button className="btn-seven">Sass</button>
          </div>
        </div>
        <div className="dev">
          <h3>Front-end Dev</h3>
        </div>
        <div id="ago10" className="ago">
          <p>1mo ago . Part Time . Worldwide</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
