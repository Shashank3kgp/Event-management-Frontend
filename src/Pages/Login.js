import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const callApi = async () =>{
        try{
         await axios.post('http://localhost:3000/login/',{email: email, password: password});
        }catch(error){
            console.log("error in logging in");
        }
    }

    return(
       <div>
        <h2>Login</h2>
        <input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        type="email"
        />
        <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="password"
        />
        <button onClick={callApi}>Login</button>
       </div>
    );
}

export default Login;