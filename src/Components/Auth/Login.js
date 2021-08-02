import React, {useState} from "react";

const Login = (props)=>{
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");

    return (<form onSubmit={async ()=>{
        try {
            await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            //get returned data and add token to localStorage if it worked

        } catch(e){
            throw new Error(e);
        }
        
    }}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <input type="submit" value="submit" />
    </form>);
}

export default Login;