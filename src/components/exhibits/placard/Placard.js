import React from "react";
import "./Placard.scss";

export default class Placard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="placard">
        <h2 className="name">{this.props.name}</h2>
        <h3 className="years">{this.props.dates}</h3>
        {this.props.children}
      </div>
    );
  }
}
