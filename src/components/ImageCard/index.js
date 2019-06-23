import React from 'react';
import "./style.css";

const ImageCard = props => (
  // console.log(props)
        <div className="card">
          <div className="img-container hover">
            <img alt={props.name} src={props.image} data-id={props.id} onClick={(e) => props.clickedImage(e)}></img>
          </div>
        </div>
)

export default ImageCard