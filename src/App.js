import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Carousel from './components/Carousel';
import Title from './components/Title';
import EventWedding from './components/EventWedding';
import Registry from './components/Registry';
import WeddingPartyWrapper from './components/WeddingPartyWrapper';
import WeddingParty from './components/WeddingParty';
import stephPeople from './stephPeople';
import ervPeople from './ervPeople';
import logo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stephPeople,
      ervPeople
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <img className="marginLogo" src={logo} alt="Logo" />
        <Carousel />
        <Title />
        <div className="details"> <EventWedding />  </div>
        <div className="registry"> <Registry /></div>
        <WeddingPartyWrapper>
          <div className="row justify-content-md-center weddingParty">
            <div className="col">
              {this.state.stephPeople.map(stephPeople => (
                <WeddingParty
                  key={stephPeople.id}
                  id={stephPeople.id}
                  name={stephPeople.name}
                  image={stephPeople.image} />
              ))}
            </div>
            <div className="col">
              {this.state.ervPeople.map(ervPeople => (
                <WeddingParty
                  key={ervPeople.id}
                  id={ervPeople.id}
                  name={ervPeople.name}
                  image={ervPeople.image} />
              ))}
            </div>
          </div>
        </WeddingPartyWrapper>
      </div>
    );
  }
}

export default App;
