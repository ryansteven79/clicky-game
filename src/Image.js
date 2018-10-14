import React, { Component } from 'react';


class Image extends Component {
  constructor(props) {
    super(props)

  }

  // common functions here


  render() {
    // console.log(this);
    return (
      <img className="img-fluid img-thumbnail" src={this.props.src} onClick={() => this.props.imageClicked(this.props.imageIndex)} alt="the"></img>
    );
  }
}

export default Image;

