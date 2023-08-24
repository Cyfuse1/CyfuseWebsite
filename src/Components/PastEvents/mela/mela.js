import "./mela.css";
import { useEffect } from "react";
import AOS from "aos";
import React from "react";
import ImageCarousel from "../carousels";

// Images import
  import p1 from "./images/20230806_121740.jpg";
  import p2 from "./images/IMG_20230806_121447.jpg";
  import p3 from "./images/IMG-20230806-WA0023.jpg";
  import p4   from "./images/IMG-20230806-WA0024.jpg";
  import p5   from "./images/20230806_140816.jpg";
  import p6   from "./images/IMG_20230806_131646.jpg";
  import p7   from "./images/1692466319017.jpg";
  

//
const images = [p1, p2, p3,p4,p5,p6,p7];
const Mela = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <>
      <div className="mela_head" id="mela_home">
        <h1 data-aos="fade-left">Club Mela</h1>
      </div>
      <div className="mela_body" id="mela_about">
        <h2 data-aos="fade-right"> About Event</h2>
      </div>

      <div className="about">
        <p data-aos="zoom-out">
        Our club, Cyfuse, organized its inaugural event at Club Mela on August 7, 2023. Although this marked our first event, we were thrilled to receive a tremendous response from many students.
        </p>
        <div className="mela_body" >
        <h2 data-aos="fade-right"> Activites</h2>
      </div>
        <p data-aos="zoom-out">
        We orchestrated two distinct activities. The first was a project involving playing Subway Surfer, utilizing the principles of PHYSICS that govern current flow in a circuit, and fusing in elements of ELECTRONICS, MUSIC, and DESIGN. We achieved this by employing a "makey makey" kit, which converts touch responses into keyboard inputs. Subsequently, we connected wires to four musical plates that generate varying sounds upon being struck. These plates serve as the initial contact points for the current to flow, with the floor acting as the secondary contact point. The participant playing the game serves as a connector between these two endpoints, thereby completing the circuit. This activity necessitates coordination between two students—one responsible for controlling UP and DOWN movements, while the other manages LEFT and RIGHT. Effective communication and navigation skills are crucial, as they must function as a unified entity.<br/><br/>
        The second activity encompassed a DATA SCIENCE WORKSHOP and CHALLENGE, designed for freshmen participants. During this workshop, we introduced newcomers to the fundamentals of the R programming language and elucidated why it is highly recommended for data science endeavors. Additionally, participants received guidance on sourcing data from NCBI, as well as importing and preprocessing it. Interested students were also introduced to statistical tests like the t-test and provided with a glimpse of machine learning concepts. At the conclusion of the workshop, students were tasked with independently completing the entire activity.
        </p>
        
        <div className="mela_body" >
        <h2 data-aos="fade-right"> Crowd</h2>
      </div>
        <p data-aos="zoom-out">
        Our efforts elicited an impressive response, with over 85 participants actively engaging, and more than 200 visitors expressing interest and making inquiries. Unfortunately, due to the substantial turnout, some were unable to participate due to the crowd size. We also received an abundance of positive feedback and valuable recommendations for enhancing future events.
        </p>
      </div>

      <div className="mela_body" id="gallery">
        <h2 data-aos="fade-right"> Gallery</h2>
      </div>
      <div className="mela_carousel">
        <ImageCarousel images={images} />
      </div>
    </>
  );
};
export default Mela;
