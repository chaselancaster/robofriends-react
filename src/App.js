import React, { Component } from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'

class App extends Component {
    state = {
        robots: robots,
        searchField: ''
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        console.log(event.target.value)
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase)
       })
        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div> 
        )
    } 
}

export default App;