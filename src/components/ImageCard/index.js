import React from 'react';
import "./style.css";

const ImageCard = props => (
  // console.log(props)
        <div className="card"id={props.id} onClick={() => props.clickedImage(props.id)}>
          <div className="img-container hover">
            <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {props.name}
              </li>
              <li>
                <strong>Occupation:</strong> {props.occupation}
              </li>
              <li>
                <strong>Location:</strong> {props.location}
              </li>
            </ul>
          </div>
        </div>
)

export default ImageCard