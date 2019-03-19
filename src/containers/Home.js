import React, { Component } from "react";
import "./Home.css";
import Table from './Table'
import Form from './Form'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class Home extends Component {
  state = {
      characters: []
      
    };
    
    removeCharacter = index => {
      const { characters } = this.state;
      
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index;
        }),
      });
    }
    
    handleSubmit = character => {
  this.setState({ characters: [...this.state.characters, character] })
}

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Pessoas</h1>
          <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}