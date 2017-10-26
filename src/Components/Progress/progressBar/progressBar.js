import React from 'react';
import './progressBar.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ProgressBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        total: this.props.total,
        target: this.props.targetValue,
        progress: 0,
        totalLeft:0
      };
    }

    componentDidMount(){
        const progressPercentage = this.state.total/this.state.target * 100;
        this.setState({
            total: this.state.total,
            target: this.state.target,
            progress: progressPercentage,
            totalLeft: progressPercentage-2.5
        })
    }
  
    render() {
      return (
        <div className="col-mid-12">
            <p className="progress-text">Reached:</p>
            <div className="bar-wrapper">
                <div className="bar-total-wrapper">
                    <ReactCSSTransitionGroup
                    transitionName="progress"
                    transitionAppear={true}
                    transitionEnter={false}
                    transitionLeave={false}
                    transitionAppearTimeout={600}>
                        <div className="bar-completed" style={{ width: `${this.state.progress}%`}}></div>
                    </ReactCSSTransitionGroup>
                </div>
                <div className="total-wrapper" style={{ left: `${this.state.totalLeft}%`}}>
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