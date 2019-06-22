import React from 'react';
import "./style.css";

function ImageCard(props) {
  console.log(props)
    return (
        <div className="card">
          <div className="img-container">
            <img onClick={() => props.clickedImage(props.id)} alt={props.name} src={props.image} />
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
      );
}

export default ImageCard