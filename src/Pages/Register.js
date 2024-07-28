import { useState } from "react";
import axios from "axios";

const Register = async () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const callApi = async () =>{
        try{
           await axios.post('http://localhost:3000/register/',{name:name, email:email, password:password});
           console.log("successfully logged in");
        }
        catch(error){
            console.log("error in registering the user");
        }
    }

    return (
       <div>
        <input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={callApi}>Register</button>
       </div>
    );
}

export default Register;