
import { Carousel } from 'react-bootstrap';

function Movies(props) {
        let moviesHTML = props.movieData.map(function(element) {
            return( 
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"https://image.tmdb.org/t/p/original" + element.poster_path}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>)
        })
        return (
            
            <Carousel>

                {moviesHTML}



            </Carousel>
        );
    };

export default Movies 
