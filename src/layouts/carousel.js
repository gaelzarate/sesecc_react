import Carousel from 'react-bootstrap/Carousel';
import oaxacaSESECC from '../assets/home/oaxacaSESECC.jpg'
import politicaPublica from '../assets/home/politicaPublica.jpg'
import tallerPDN from '../assets/home/tallerPDN.jpeg'

function DarkVariantCarusel() {
  return (
    <Carousel variant="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={oaxacaSESECC}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={politicaPublica}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>Politica Pública</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tallerPDN}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>Taller PDN</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantCarusel;