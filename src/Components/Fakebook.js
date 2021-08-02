import React, {Component} from "react";
import UserPanel from "./UserPanel";
import Feed from "./Feed";
import AuthForm from "./Auth/AuthForm";

class Fakebook extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: ""
        }
    }

    async componentDidMount(){
        const URL = "http://localhost:3000";
        //fetch initial results
        if (localStorage.getItem("token")){
            let user;
            try {
                user = await fetch(URL+"/home", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                        } 
                });
                user = await (()=>user.ok ? user.json() : new Error("Problem retrieving data"))();
                this.setState({currentUser: user});
            } catch(e){ console.log(e); }
        }
    
    }

    render(){
        //if authenticated, show UserData/Feed, otherwise, show login/register screen
        return (this.state.currentUser!=="" ? <div><UserPanel /><Feed /></div> : <AuthForm />);
    }
}

export default Fakebook;