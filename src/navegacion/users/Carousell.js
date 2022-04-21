import React from "react";
import Carousel from "react-bootstrap/Carousel";
import foto2 from "../../image/jpg/fotoavellaneda2.jpg";
import foto1 from "../../image/jpg/fotoavellaneda1.jpg";
const Carousell = () => {
  return (
    <>
      <Carousel className="ubicando">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={foto2}
            alt="First slide"
            width="100%"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={foto1}
            alt="First slide"
            width="100%"
            height="500px"
          />
          {/*   <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousell;
