import React from 'react';
import './info.css';

class InfoBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        target: this.props.targetValue
      };
    }
  
    render() {
      return (
        <div className="col-mid-12">
            <img className="info-icon" alt="Info Icon" src="https://openclipart.org/image/2400px/svg_to_png/274087/1488160614.png"/>
            <p className="info-text">You need ${this.state.target} to reach your target</p>
        </div>
      );
    }
  }

export default InfoBar;