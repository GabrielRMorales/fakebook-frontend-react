import React, {useState} from "react";
import Login from "./Login";
import Register from "./Register";

const AuthForm = (props)=>{
    const [form, swapForm] = useState(0);
    return (<div>
        <button onClick={()=>{
            swapForm(0);
        }} >Log in</button>
        <button onClick={()=>{
            swapForm(1);
        }} >Sign up</button>
        {form === 1 ? <Login /> : <Register />}
    </div>)
};

export default AuthForm;