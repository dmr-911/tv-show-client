import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';

const Footer = () => {
    const phone = <FontAwesomeIcon icon={faPhone} style={{color: 'tomato'}}/>;
    const message = <FontAwesomeIcon icon={faEnvelope} style={{color: 'tomato'}}/>;
  const location = <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'tomato' }} />;
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
  };
    return (
      <>
        <Container fluid className="footer-text text-white py-5 footer">
          <Row xs={1}>
            <Col>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div
                  style={{
                    backgroundColor: "tomato",
                    width: "4px",
                    height: "20px",
                  }}
                  className="me-4"
                ></div>
                <b className="fs-5">About Tvmaze</b>
              </div>
              <p className="">
                Step up with <b>tvmaze.com</b>. Your step one step can make us bigger and movie show's in your reach now. 
              </p>
              <div className="divider bg-info rounded my-3 mx-auto"></div>
            </Col>
            <Col>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div
                  style={{
                    backgroundColor: "tomato",
                    width: "4px",
                    height: "20px",
                  }}
                  className="me-4"
                ></div>
                <b>CONTACT INFORMATION</b>
              </div>
              <p>
                <span>{phone}</span>
                <span> +880 1313124926</span>
              </p>
              <p>
                <span>{message} </span>
                <span> dewan.mizanur911@gmail.com</span>
              </p>
              <p>
                <span>{location} </span>
                <span> Dhaka, Bangladesh</span>
              </p>
              <div className="divider bg-info rounded my-3 mx-auto"></div>
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          style={{ backgroundColor: "black" }}
          className="text-white py-5"
        >
              <small>
                Copyright ©DMR 2021 Tvmaze.com . All rights reserved.
              </small>

        </Container>
      </>
    );
};

export default Footer;