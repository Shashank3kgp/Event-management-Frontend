import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from '../Components/eventCard';

const Home = () =>{
    const [eventData,setEventData] = useState(""); 
    
    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await axios.get('http://localhost:3000/events/');
                setEventData(response.data);
            }
            catch(error){
                console.log("error in getting events data");
            }
        }

        fetchData();
    });
    
    return(
        <div>
            {eventData.map(event=>{
                return (
                <EventCard event={event}/>
                )
            })}
        </div>
    );
}

export default Home;