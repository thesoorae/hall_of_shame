import React from "react";
import Koch from "../exhibits/koch/Koch.js";
import "./Entrance.scss";
export default class Entrance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibit: null
    };
  }

  showRandom = () => {
    this.setState({
      exhibit: 1
    });
  };

  renderExhibit = () => {
    if (this.state.exhibit) {
      switch (this.state.exhibit) {
        case 1:
          return <Koch />;
      }
    }
  };
  renderOption = (name, clickHandler) => {
    return (
      <button className={`option`} onClick={clickHandler}>
        {name}
      </button>
    );
  };

  renderOptions = () => {
    return (
      <div className="options_container">
        {this.renderOption("Random", this.showRandom)}
        {this.renderOption("Browse", null)}
        {this.renderOption("View All", null)}
      </div>
    );
  };
  render() {
    return (
      <div className="entrance">
        <div className="doors" />
        <h2>Welcome to the Climate Crisis Hall of Shame</h2>
        {this.renderOptions()}
        {this.renderExhibit()}
      </div>
    );
  }
}
