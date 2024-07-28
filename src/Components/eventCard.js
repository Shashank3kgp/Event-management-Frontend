import axios from "axios";

const eventCard = (event) => {
    const {name,data,location,description,userId} = event;
    const deleteEvent = async () =>{
        await axios.delete('http://localhost:3000/events/${eventId}/',{userId: userId});
    }
    const updateEvent = async() => {
        await axios.put('http://localhost:3000/events/${eventId}/',{});
    }
    return (
        <div>
            <p>{name}</p>
            <p>{data}</p>
            <p>{location}</p>
            <p>{description}</p>
            <button onClick={updateEvent}>Update</button>
            <button onClick={deleteEvent}>Delete</button>
        </div>
    );
}

export default eventCard;