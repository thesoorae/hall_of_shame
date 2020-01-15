import React from "react";
import Exhibit from "../Exhibit.js";
import Placard from "../placard/Placard.js";
import "./Koch.scss";
export default class Koch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inView: false
    };
  }

  componentDidMount() {
    this.setState({
      inView: true
    });
  }

  render() {
    let classes = this.state.inView ? "slide-out" : "slide-in";
    return (
      <Exhibit className="d_koch">
        <div className="image_container">
          <img src="images/david_koch.png" classNames={` ${classes}`} />
        </div>
        <Placard name="David Koch" dates="1940-2019">
          David Koch worked tirelessly, over decades, to jettison from office
          any moderate Republicans who proposed to regulate greenhouse gases. In
          2009, when South Carolina Republican, Representative Bob Inglis,
          proposed a carbon tax bill, Koch Industries stopped funding his
          campaign, donated heavily to a primary opponent named Trey Gowdy and
          helped organize teams of Tea Party activists who traveled to town hall
          meetings to protest against Mr. Inglis. Mr. Inglis lost re-election,
          and his defeat sent a message to other Republicans: Koch’s orthodoxy
          on climate rules could not be violated. Mike Pence, who was then a
          congressman in Indiana, and others soon signed a “carbon pledge”
          circulated by Americans for Prosperity, which effectively prohibited
          the government from putting a price on carbon emissions.
        </Placard>
      </Exhibit>
    );
  }
}
