
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monster: [],
      searchField: ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monster:users}) )
}

  render(){
  return (
    <div className="App">
      <input 
        type='' 
        placeholder='search monster'
        onChange={e=>
          this.setState({searchfield: e.target.value})
        }

        />
      <CardList monsters={this.state.monster} />
    </div>
  );
}
}

export default App;
