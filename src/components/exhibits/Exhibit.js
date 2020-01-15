import React from "react";
import "./Exhibit.scss";

export default class Exhibit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`exhibit ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
