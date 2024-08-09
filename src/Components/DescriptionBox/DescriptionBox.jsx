import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce site is a digital platform where users can browse,
          select, and purchase products or services online. It offers a seamless
          shopping experience with features like secure payment gateways,
          personalized recommendations, and easy navigation.
        </p>
        <p>
          E-commerce websites typically display products or service and detailed
          descriptions,images,prices and any available variety(e.g, sizes,
          colors).Each product usually has its own dedicated relevant
          information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
