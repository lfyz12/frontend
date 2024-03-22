import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import car from '../../static/car.jpg';
import jap from '../../static/jap.jpg';
import jw from '../../static/jw.png';
const Carusel = () => {
    return (
        <Carousel className='me-auto ms-auto w-50'>
            <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={car}
                        alt='firstPicture'
                    />
            </Carousel.Item>
            <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={jap}
                        alt='firstPicture'

                    />
            </Carousel.Item>
            <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={jw}
                        alt='firstPicture'

                    />
            </Carousel.Item>
      </Carousel>
    );
};

export default Carusel;