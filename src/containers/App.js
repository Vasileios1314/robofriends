//                 * 
import React, {Component} from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";

// component insted of react.component *
class App extends Component {
    // declaring the state
    constructor(){
        // in order to use this,you have to use super(),calls the cunstructor
        super()
        this.state= {
            // two states in the app component
            // robots: robots,
            robots: [],
            searchfield:""
        }
    }
    // fetching data from an extrernal api
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
                    // if you add robots you will see the robots objs insted of
        .then(users => {this.setState({robots:users})});   
    }
    // search input change event
    onSearchChange = (event) => {
        // always with an event,event.target.value(giving the value)
        this.setState({searchfield:event.target.value})
        
    }
    render() {
        // you can use const { robots, searchfield} = this.state and remove it from the following lines so is cleaner.
        // distructuring *
            const filteredRobots = this.state.robots.filter(robot =>{
                // compering,filtering
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
            // if the connection is slow you add an if else statment or ternary
            // insted of ===0 you can use ! 
        if(this.state.robots.length === 0){
            return<h1>Loading</h1>
        }else{
        return (
            <div className="tc">
            <h1 className='f1'>RoboFriends</h1>
            {/* use this. because is comming from obj */}
            <Searchbox searchChange ={this.onSearchChange}/>  
            {/* destructuring, insted of this.filterRobots */}
            <Scroll>
                {/* add scroll */}
                <ErrorBoundry>
            <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
            </div>
          );
        }
    }
}
   

export default App;