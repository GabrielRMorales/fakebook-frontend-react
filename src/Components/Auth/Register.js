import React from "react";

const Register = (props)=>{
    //make this controlled
    return (<form onSubmit={()=>{}}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" />
        <label htmlFor="lastName" >Last Name:</label>
        <input type="text" id="lastName" name="lastName" />
    </form>);
}

export default Register;