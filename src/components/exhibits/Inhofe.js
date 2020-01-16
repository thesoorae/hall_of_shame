import React from "react";
import Exhibit from "./Exhibit.js";
import Placard from "./placard/Placard.js";
import "./Inhofe.scss";
import styled, { keyframes } from "styled-components";
import { swing } from "react-animations";

const SwingAnimation = keyframes`${swing}`;
const SwingDiv = styled.div`
  animation: 2s ${SwingAnimation};
`;
export default class Inhofe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Exhibit className="inhofe">
        <div className="image_container">
          <SwingDiv>
            <img src="images/james_inhofe.png" />
          </SwingDiv>
        </div>
        <Placard name="James Inhofe" dates="1934-present">
          Inhofe has been in the Senate since 1994 and has served as the top
          Republican on the Senate Environment and Public Works Committee for 12
          out of the past 14 years. For much of that time, he has been one of
          the nation’s most powerful climate-change skeptics, even writing a
          book in 2012 attacking the science around global warming, which most
          of the world has accepted as a serious and urgent threat. His most
          high-profile assault on climate science came on a cold day in February
          2015, when he stood on the Senate floor, fresh snowball in hand, to
          suggest that Earth could not be warming in any dangerous way, given
          the winter weather outside.
        </Placard>
      </Exhibit>
    );
  }
}

//https://www.washingtonpost.com/national/health-science/how-james-inhofe-is-upending-the-nations-energy-and-environmental-policies/2017/03/14/2bebdbfa-081c-11e7-a15f-a58d4a988474_story.html
