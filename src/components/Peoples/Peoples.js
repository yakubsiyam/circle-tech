import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Peoples = (props) => {

    // destructuring
    const{name, position, experience, salary, img, country} = props.people;

    return (

        // card show
        <div className="col-md-4">
            <div className="card bg-light">
                <img src={img} className="card-img-top" alt="..." width ="200px" height ="300px"/>
                <div className="card-body text-center">
                    <p className = "fw-bold"><span className = "text-danger">Name:</span> {name}</p>
                    <p className = "fw-bold"> <span className = "text-danger">Position:</span> {position}</p>
                    <p className = "fw-bold"><span className = "text-danger">Experience:</span> {experience}</p>
                    <p className = "fw-bold"><span className = "text-danger">Salary:</span> ${salary}</p>
                    <p className = "fw-bold"><span className = "text-danger">Country:</span> {country}</p>
                </div>

                {/* cart show*/}
                <div className = "text-center mb-2">
                    <button
                    onClick={() => props.handleAddToCart(props.people)}
                    className="btn btn-danger w-50"><FontAwesomeIcon icon={faUserAlt} /> Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Peoples;