import React from 'react';
import './progressBar.css';

class ProgressBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        total: this.props.total,
        target: this.props.targetValue,
        progress: 0,
        totalLeft:0,
        totalOpacity: 0
      };
    }

    componentDidMount(){
        const progressPercentage = this.state.total/this.state.target * 100;
        const ANIMATION_TIMEOUT = 500;
        setTimeout(() => {
            this.setState({
                total: this.state.total,
                target: this.state.target,
                progress: progressPercentage,
                totalLeft: progressPercentage-2.5,
                totalOpacity: 1
            })
          }, ANIMATION_TIMEOUT);
       
    }
  
    render() {
      return (
        <div className="progress-main-wrapper">
            <p className="progress-text">Reached:</p>
            <div className="bar-wrapper">
                <div className="bar-total-wrapper">
                    <div className="bar-completed" style={{ width: `${this.state.progress}%`}}></div>
                </div>
                <div className="total-wrapper" style={{ left: `${this.state.totalLeft}%`, opacity: this.state.totalOpacity}}>
                    <span>^</span>
                    <p>${this.state.total}</p>
                </div>
            </div>
            <div className="target-wrapper">
                <p>Target</p>
                <span>${this.state.target}</span>
            </div>
        </div>
      );
    }
  }

export default ProgressBar;