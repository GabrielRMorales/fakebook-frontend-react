import React, {Component} from "react";
import UserData from "./UserData";
import Feed from "./Feed";
import Login from "./Login";

class Fakebook extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

        //fetch initial results
    }
    render(){
        //if authenticated, show UserData/Feed, otherwise, show login/register screen
        let authenticated;        
        return (authenticated ? <div><UserData /><Feed /></div> : <Login />);
    }
}

export default Fakebook;