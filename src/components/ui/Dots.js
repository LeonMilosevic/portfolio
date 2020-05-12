import React from "react";
import Circle1 from "../../images/circle1.svg";
import Circle2 from "../../images/circle2.svg";
import Circle3 from "../../images/circle3.svg";

const Dots = (props) => {
  return (
    <>
      <div
        className={`loader_circle loader_circle__circle_1 ${props.extraClassCirlcle1}`}
      >
        <img
          style={{ height: "150px", width: "150px" }}
          src={Circle1}
          alt="Loading Circle"
        />
      </div>
      <div
        className={`loader_circle loader_circle__circle_2 ${props.extraClassCirlcle2}`}
      >
        <img
          style={{ height: "150px", width: "150px" }}
          src={Circle2}
          alt="Loading Circle"
        />
      </div>
      <div
        className={`loader_circle loader_circle__circle_3 ${props.extraClassCirlcle3}`}
      >
        <img
          style={{ height: "150px", width: "150px" }}
          src={Circle3}
          alt="Loading Circle"
        />
      </div>
    </>
  );
};
export default Dots;
