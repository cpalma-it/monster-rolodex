
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}) )
}

onSearchChange = e => {
  this.setState({searchField: e.target.value})
};

  render(){
    const { monsters, searchField } = this.state;

    console.log('monsters = ' + monsters);
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(
        searchField.toLowerCase()
        )
      );

    console.log('filteredMonsters = ' + filteredMonsters);
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
          placeholder='search monster'
          onSearchChange={this.onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
}

export default App;
