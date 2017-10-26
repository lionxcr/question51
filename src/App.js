import React, { Component } from 'react';
import logo from './logo.svg';
import Progress from './Components/Progress/progress';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showDialog: false
    }
    
    this.showModal = this.showModal.bind(this);
  }

  showModal(){
    this.setState({
      showDialog: !this.state.showDialog
    })
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">My Account</h1>
              <button onClick={() => this.showModal()} className="btn btn-primary">Show Progress</button>
            </header>
          </div>
        </div>
        <Progress showDialog={this.state.showDialog} toggleFunc={() => this.showModal()}/>
      </div>
    );
  }
}

export default App;
