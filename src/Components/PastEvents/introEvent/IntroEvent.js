import "./introEvent.css";
import { useEffect } from "react";
import AOS from "aos";
import React from "react";
import ImageCarousel from "../carousels";

// Images import
//   import p1 from "./images/20230806_121740.jpg";
//   import p2 from "./images/IMG_20230806_121447.jpg";
//   import p3 from "./images/IMG-20230806-WA0023.jpg";
//   import p4   from "./images/IMG-20230806-WA0024.jpg";
//   import p5   from "./images/20230806_140816.jpg";
//   import p6   from "./images/IMG_20230806_131646.jpg";
//   import p7   from "./images/1692466319017.jpg";
  

//
// const images = [p1, p2, p3,p4,p5,p6,p7];
const Mela = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <>
      <div className="mela_head" id="mela_home">
        <h1 data-aos="fade-left">Introductory Event</h1>
      </div>
      <div className="mela_body" id="mela_about">
        <h2 data-aos="fade-right"> About Event</h2>
      </div>

      <div className="about">
        <p data-aos="zoom-out">
        Cyfuse organized its official inaugural event on 17th August 2023 , an evening that marked the commencement of our journey. In the event we introduced our motivation, vision, our core values, objectives and operations. 
        </p>
        <div className="mela_body" >
        <h2 data-aos="fade-right"> Activites</h2>
      </div>
        <p data-aos="zoom-out">
        The event kicked off with an engaging presentation by Udit, the Head of our esteemed Project Team. He navigated the audience through the club's mission and vision, highlighting its commitment to fostering technological innovation in the domains: Mechatronics, Robotics, Transhumanism and AI, in the end he described the structure and working of the club.
<br/><br/>
        
After the enlightening presentation, we had the privilege of hosting Professor Anmol Shrivastva--specializes in Human-Computer Interaction. With the help of informative slides, Professor Shrivastva gave us a sneak peek into how robotics, mechatronics, transhumanism, AI, VR and such technologies and how these technologies can be integrated in our daily lives. He introduced us to projects that students, guided by him, had created. These were practical projects that brought to life the ideas and concepts he was explaining. Cyfuse Club aims not only to share knowledge but also to inspire us to dive into the world of technology and turn ideas into real-life innovations.
<br/><br/>
An interactive session, helmed by Udit, brought participants together to explore innovative real-life problems and solutions. This event showcased Cyfuse's commitment to nurturing a vibrant community of aspiring technocrats.

        </p>
        
        
        
      </div>

      <div className="mela_body" id="gallery">
        <h2 data-aos="fade-right"> Gallery</h2>
      </div>
      <div className="mela_carousel">
        {/* <ImageCarousel images={images} /> */}
      </div>
    </>
  );
};
export default Mela;
