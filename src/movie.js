import React from "react";
import { Carousel } from "react-bootstrap";

function Movie(props) {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={"https://image.tmdb.org/t/p/original" + props.poster_path}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default Movie