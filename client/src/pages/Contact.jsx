import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



function Contact() {

  const breadcrumbs = [
    // <Link underline="hover" key="1" color="inherit" href="/about">
    //  <span className='intro'>Contact</span> 
    // </Link>,
    <Link underline="hover" key="1" color="inherit" href="/home">
      <span className='intro'>Home</span> 

    </Link>,
  //   <Link underline="hover" key="1" color="inherit" href="/about">
  //      <span className='intro'>About</span> 

  // </Link>
  ];

  return (
    <section>
    <Container>
      <Row className="d-flex p-7 align-items-center justify-content-center"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Col lg={6} md={6} className="p-4">

          <h1 className='name' >Contact me!</h1>
          <br/>
          <p className='intro'>Contact me via LinkedIn or email at: rentxiang@gmail.com 🤠</p>
          {/* <p className='intro'>Currently I am pursuing my Masters in Information Systems at Northeastern University, interning with <Link underline="hover" key="1" color="inherit" href="https://usetract.com"><span className='bold'>TRACT</span></Link> as a software development intern.</p> */}
          <p className='intro'></p>
          <div>
          <br/>
          <a href="https://www.linkedin.com/in/rentxiang/" className="p-3">
          <GitHubIcon color="action" fontSize="large" />
          </a>
          <a href="https://github.com/rentxiang" className="p-3">
          <LinkedInIcon color="action" fontSize="large" />
          </a>
              <Stack spacing={2} style={{margin:20}}>
          
          <Breadcrumbs separator="-" aria-label="breadcrumb" className="d-flex p-7 align-items-center justify-content-center ">
            {breadcrumbs}
          </Breadcrumbs>
          
        </Stack>
          </div>
        </Col>
        <Col lg={3} md={6} className="p-4">
          {/* <img src={ContactImg} className="App-logo" alt="logo" /> */}
        </Col>
      </Row>
      
      <Row style={{paddingTop:0}} >
      <hr />

        <Projects/>
      </Row>
      <Footer/>
    </Container>
    </section>

    

  );
}

export default Contact;