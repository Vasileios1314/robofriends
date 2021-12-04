import React, {Component} from "react";
import cardList from "./cardList";
import Searchbox from "./Searchbox";
import { robots } from "./robots";



class App extends Component {
    constructor(){
        super()
        this.state= {
            robots: robots,  
            searchfield:""
        }
    }
    onSearchChange(event) {
        this.setState({searchfield:event.tartget.value})
        
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        

        return (
            <div className="tc">
            <h1>RoboFriends</h1>
            <Searchbox searchChange ={this.onSearchChange}/>
            <cardLIst robots={filteredRobots}/>
    
            </div>
        );
    }
    }
   

export default App;