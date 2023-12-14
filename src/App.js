import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import icon from './RPicon.png';
import './fontAwesome';


function App() {

  const openWhatsApp = () => {
    
    const phoneNumber = '+919509001616';
    const message = 'Hello%20RcExchange!!';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='mainDiv'>  
      <Container >

        <Row className='topHeightByScreen'>
          <Col md={6} xs ={12}>
            <Col md={12} className='pageIcon mt-4 mb-4'>
              <Image className="imgLogo" src={icon} alt="Sample Image" fluid />
            </Col>
          </Col>

          <Col md={6} xs ={12}>
          <Col md={10} className='mt-4' >
            <button className='btn2 btnWhatsAppBG' onClick={openWhatsApp}>

              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 448 512"><path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
              <span className='btnTextAlign '>
                WhatsApp <br /> Click Here
              </span>
            </button>
          </Col>

          <Col md={10} className='mt-4' >
            <button className='btn2 btnOfferAppBG' onClick={openWhatsApp}>

              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 448 512"><path fill="#ffffff" d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
              <span className='btnTextAlign '>
                10% Bouns Offer <br /> Get Your ID now
              </span>
            </button>
          </Col>

          <Col md={10} className='mt-4' >
            <button className='btn2 btnAllTimeBG' onClick={openWhatsApp}>

              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 448 512"><path fill="#ffffff" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
              <span className='btnTextAlign '>
                24x7 <br /> All Time Available
              </span>
            </button>
          </Col>
          
          <Col md={10} className='mt-4' >
            <button className='btn2 btnPhoneBG' onClick={openWhatsApp}>

              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 448 512"><path fill="#ffffff" d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z" /></svg>
              <span className='btnTextAlign '>
                Easy & Fast <br /> Instant Delivery
              </span>
            </button>
          </Col>

          <Col md={10} className='mt-4' >
            <button className='btn2 btnCricketBG' onClick={openWhatsApp}>

              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 448 512"><path fill="#ffffff" d="M424 0c-12.4 0-24.2 4.9-33 13.7L233.5 171.2c-10.5 10.5-19.8 22.1-27.7 34.6L132.7 321.6c-7.3 11.5-15.8 22.2-25.5 31.9L69.9 390.7l51.3 51.3 37.3-37.3c9.6-9.6 20.3-18.2 31.9-25.5l115.8-73.1c12.5-7.9 24.1-17.2 34.6-27.7L498.3 121c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L457 13.7C448.2 4.9 436.4 0 424 0zm88 432a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM15 399c-9.4 9.4-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L49 399c-9.4-9.4-24.6-9.4-33.9 0z" /></svg>
              <span className='btnTextAlign '>
              Cricket <br /> Click Here
              </span>
            </button>
          </Col>

          <Col md={10} className='mt-4' >
            <button className='btn2 btnOfferAppBG' onClick={openWhatsApp}>

              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="50" viewBox="0 0 448 512"><path fill="#ffffff" d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H461.7c11.6 36 3.1 77-25.4 105.5L320 413.8V448zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
              <span className='btnTextAlign '>
                Casino <br /> Click Here
              </span>
            </button>
          </Col>
          </Col>
        


        </Row>
      </Container>
    </div>

  );
}

export default App;
