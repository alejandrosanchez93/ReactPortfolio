import React from "react";
import boozaPortrait from "../images/boozaPortrait.jpg";
import goku from "../images/goku.jpg";
import leo from "../images/leo.jpg";
import simbaPosing from "../images/simbaPosing.jpg";
import me from "../images/mexicoCityPic.jpg";
import resume from "../images/Alejandro Sanchez Resume 2020.pdf";
import "../css/Body.css";
import "../css/reset.css";

function Body() {
    return (
        <div>
            <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="firstHeader">About Me</h1>
        </div>
      </div>

      <hr/>

        <div className="row">
            <div className="col-8">
                <img className="img-fluid float-left mr-3 rounded" width="150" src={me} alt="me in Mexico City"></img>
                <p className="aboutMe">My name is Alejandro Sanchez, I am 27 years old, and I am currently enrolled in a fullstack javascript boot camp. We are on our last month and it has been an awesome journey.</p>
                <p className="aboutMe">I was raised in the Rio Grande Valley, currently reside in McAllen, and have been here most of my life. I have traveled to different states and cities working from retail jobs to fabrication shops.
                  I have been loving the grind of learning these new frameworks. This boot camp has been a fulfilling experience.</p>
                <p className="aboutMe">When I am not working or studying I like to spend my time with my pets. I have a three year old shih tsu named Goku, a four year old pitbull named Bruiser, a six year old ball python named Leonidas, and an eight year old orange tabby named Simba.
                  My hobbies consist of drawing, skateboarding, playing guitar and video games. If you would like to know more about me visit the <a className="contactReference" href="./pages/contact.html">Contact</a> page, leave me your info and I'll get back to you!
                </p>
                

            </div>
           
            <div className="col-4">
                <img className="img-fluid m-1 mb-2 rounded" width="150" alt="my shih tsu Goku" src={goku}></img>
                <img className="img-fluid m-1 mb-2 rounded" width="150" alt="my pitbull Bruiser" src={boozaPortrait}></img>
                <img className="img-fluid m-1 mb-2 rounded" width="150" alt="my cat simba" src={simbaPosing}></img>
                <img className="img-fluid m-1 mb-2 rounded" width="150" alt="me and my ball python" src={leo}></img>
            </div>




        </div>

        <div className="row">
          <div className="col-12">
            <a className= "links" href="https://github.com/alejandrosanchez93/portfolio">Git Hub</a>
            <a className= "links" href="https://www.linkedin.com/in/alejandro-sanchez-944573186/">LinkedIn</a>
            <a className= "links" href={resume}>Resume</a>
          </div>

        </div>

        


    </div>
        </div>
    );
};

export default Body;