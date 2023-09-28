import React from "react";
import {
  BsInsragram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icon/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Insragram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
      </div>
    </div>
  );
};

export default Gallery;
