import { Container, Col, Row } from "react-bootstrap";
import React from "../assets/React-icon.svg";
import Python from "../assets/python.png";
import Typescript from "../assets/typescript.png";
import nodejs from "../assets/nodejs.png";
import java from "../assets/java.png";
import js from "../assets/java-script.png";
import dj from "../assets/django.svg";
import CodeIcon from '@mui/icons-material/Code';

const TechStack = () => {
  const renderTechIcon = (src, alt) => (
    <Col lg={2} md={4} sm={6} style={{ marginBottom: "20px" }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", maxWidth: "150px", height: "auto" }}
      />
    </Col>
  );

  return (
    <section>
      <Container className="">
        <Row className='align-items-center justify-content-center' style={{ marginTop: '50px', marginBottom: '50px', textAlign: 'left' }}>
                    <Col lg={10} md={10} className="p-4">
                        <h1 className="name py-3" style={{ textAlign: "left" }}><span><CodeIcon fontSize="large"/></span> Stacks</h1>
                        <p className="intro" style={{ textAlign: "left" }}>
                            What I mainly use?
                        </p>
                    </Col>
                </Row>
        <Row>
          <Col lg={10}>
            <Row
              className="align-items-center justify-content-center"
              style={{ marginBottom: "20px" }}
            >
              {renderTechIcon(React, "React")}
              {renderTechIcon(Python, "py")}
              {renderTechIcon(Typescript, "ts")}
              {renderTechIcon(js, "js")}
            </Row>
            <Row className="align-items-center justify-content-center">
              {renderTechIcon(java, "java")}
              {renderTechIcon(nodejs, "nodejs")}
              {renderTechIcon(dj, "dj")}
            </Row>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default TechStack;
