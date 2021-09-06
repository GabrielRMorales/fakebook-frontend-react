import React from "react";

const Register = (props)=>{
    //make this controlled
    return (<form onSubmit={async ()=>{
       let data;
       try {
            data = await fetch("http://localhost:3000/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                })
            });
            data = data.json();
       } catch(e){
            throw new Error(e);
       }
       
    }}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" />
        <label htmlFor="lastName" >Last Name:</label>
        <input type="text" id="lastName" name="lastName" />
    </form>);
}

export default Register;