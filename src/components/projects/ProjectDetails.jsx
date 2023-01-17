/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
    const params = useParams();
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {params.id}
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit, deleniti debitis doloribus obcaecati optio ipsa
                        numquam, possimus consequatur cupiditate labore
                        molestias vitae voluptatum reiciendis, sunt molestiae
                        earum beatae. Rem, minima!
                    </p>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by ds</div>
                        <div>2022</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
