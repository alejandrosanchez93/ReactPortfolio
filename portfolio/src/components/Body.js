import React from "react";

function Body() {
    return (
        <div>
            <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="firstHeader">About Me</h1>
        </div>
      </div>

      <hr/>

        <div class="row">
            <div class="col-8">
                <img class="img-fluid float-left mr-3 rounded" width="150" src="./Assets/Images/mexicoCityPic.jpg" alt="me in Mexico City"></img>
                <p class="aboutMe">My name is Alejandro Sanchez, I am 27 years old, and I am currently enrolled in a fullstack javascript boot camp. We are on our last month and it has been an awesome journey.</p>
                <p class="aboutMe">I was raised in the Rio Grande Valley, currently reside in McAllen, and have been here most of my life. I have traveled to different states and cities working from retail jobs to fabrication shops.
                  I have been loving/hating the grind of learning these new languages. I was a pipe welder for two years and enjoyed the learning process. This boot camp has been a fulfilling experience.</p>
                <p class="aboutMe">When I am not working or studying I like to spend my time with my pets. I have a three year old shih tsu named Goku, a four year old pitbull named Bruiser, a six year old ball python named Leonidas, and an eight year old orange tabby named Simba.
                  My hobbies consist of drawing, skateboarding, playing guitar and video games. If you would like to know more about me visit the <a class="contactReference" href="./pages/contact.html">Contact</a> page, leave me your info and I'll get back to you!
                </p>
                

            </div>
           
            <div class="col-4">
                <img class="img-fluid m-1 mb-2 rounded" width="150" alt="my shih tsu Goku" src="./Assets/Images/goku.jpg"></img>
                <img class="img-fluid m-1 mb-2 rounded" width="150" alt="my pitbull Bruiser" src="./Assets/Images/boozaPortrait.jpg"></img>
                <img class="img-fluid m-1 mb-2 rounded" width="150" alt="my cat simba" src="./Assets/Images/simbaPosing.jpg"></img>
                <img class="img-fluid m-1 mb-2 rounded" width="150" alt="me and my ball python" src="./Assets/Images/leo.jpg"></img>
            </div>




        </div>

        <div class="row">
          <div class="col-12">
            <a class= "links" href="https://github.com/alejandrosanchez93/portfolio">Git Hub</a>
            <a class= "links" href="https://www.linkedin.com/in/alejandro-sanchez-944573186/">LinkedIn</a>
            <a class= "links" href="./Assets/Images/Alejandro Sanchez Resume 2020.pdf">Resume</a>
          </div>

        </div>

        


    </div>
        </div>
    );
};

export default Body;