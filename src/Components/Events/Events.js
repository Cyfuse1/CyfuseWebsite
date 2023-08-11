import './Events.css'
import Records from './Events.json'
import ListItems from './ListItems';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
const Events=()=>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return(
        <>
        <div className="events-top">
            <h1 data-aos="fade-left">Events</h1>
        </div>
        <div className="sub-heading">
            <h2 data-aos="zoom-out">Upcoming Events</h2>
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
export default Events