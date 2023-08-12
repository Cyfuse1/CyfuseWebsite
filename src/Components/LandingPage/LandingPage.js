import './LandingPage.css'
import React, { useEffect } from 'react';
import Records from './Events.json'

import AOS from 'aos';
import 'aos/dist/aos.css';
import ListItems from './ListItems';
const LandingPage=()=>{
   useEffect(()=>{
        AOS.init({duration:2000});
   },[]);
    return(
      <>
       <div className="landing">
           
       <div className='imageContainer' >
       <img src="/whitelogo.png" alt="" data-aos="zoom-out" style={{
        backgroundImage: `url(/whitelogo.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px'
       }}/>

       </div>

           <h2 data-aos="zoom-out">CyFuse</h2>
            </div>
            <div className="aboutsec">
                <div className="content" data-aos="fade-up">
                        <h2>
                            About
                        </h2>
                        <p>
                        Our motive is to ignite a profound passion for the cutting-edge technology encompassing Mechatronics and Transhumanism. We are driven by the desire to stay at the forefront of these fields and diligently share our knowledge, thus empowering individuals to explore and embrace the exciting advancements taking place within them.
                        </p>
                </div>
                   
            </div>
            <div className="sub-heading" data-aos="fade-up">
                <h2>Upcoming Events</h2>
            </div>
            <div className="sessions">
            {
                Records.map(record =>{
                    return(
                        <div className="box" data-aos="fade-up" key={record.id}>
                            <ListItems image={record.image} title={record.title} description={record.description}/>
                        </div>
                    )
                })
            }
        </div>
      </>
       
    );
}
export default LandingPage