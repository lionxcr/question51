import React from 'react';
import './progress.css';
import InfoBar from './infoSection/info';
import ProgressBar from './progressSection/progressBar';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';

class Progress extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        total: 56,
        target: 125
      };

    }
  
    render() {
      return (
        <div>
          <Modal isOpen={this.props.showDialog} toggle={this.props.toggleFunc} className={this.props.className}>
            <ModalHeader toggle={this.props.toggleFunc} className="progress-header">Your Progress</ModalHeader>
            <ModalBody>
                <div className="container progress-wrapper">
                    <ProgressBar total={this.state.total} targetValue={this.state.target}/>
                    <InfoBar targetValue={this.state.target-this.state.total}/>
                </div>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }
  
  export default Progress;