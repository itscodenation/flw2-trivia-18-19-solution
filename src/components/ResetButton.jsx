import React, { Component } from 'react';

class ResetButton extends Component {
  
  render() {
    return (
      <div className="reset-button"
        onClick={this.props.resetButtonClicked}
      >
        Reset
      </div>
    );
  }
}

export default ResetButton;