import './Events.css'
import Records from './Events.json'
import ListItems from './ListItems';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Chrono } from "react-chrono";
import { useEffect } from 'react';
import pastEvents from './pastEvents.json'

const Events=()=>{
    const handleCardClick = (item) => {
        if (item.url) {
          // If the item has a URL, open it in a new tab
          console.log(item.url)
          window.open(item.url, '_blank', 'noreferer');
        }
      };
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return(
        <>
        <div className="events-top">
            <h1 data-aos="fade-left">Events</h1>
        </div>
        
        
        {/* <div className="sub-heading">
            <h2 data-aos="zoom-out">Past Events</h2>
        </div> */}
        <div className="past-struct">
           {/* for reference use this:-
           https://react-chrono.vercel.app/features/slideshow.html */}
                <Chrono
            items={pastEvents}
            mode="VERTICAL_ALTERNATING"
            cardOnClick={handleCardClick}
            />
        </div>
        
        </>
    );
}
export default Events