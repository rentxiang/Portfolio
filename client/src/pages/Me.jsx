import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Typography } from "@mui/material";
import Dylan from "../assets/zoo_Dylan.JPG";
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
import Navbar from '../components/Navbar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Me() {

  const breadcrumbs = [
    
    <Link underline="hover" key="1" color="inherit" href="Resume_Tianxiang_Ren.pdf" download="Resume_Tianxiang_Ren.pdf">
        
     <span className='intro'><NavigateNextIcon/> Get My Resume</span> 
    </Link>,
    // <Link underline="hover" key="1" color="inherit" href="/home">
    //   <span className='intro'>Home</span> 

    // </Link>,
  //   <Link underline="hover" key="1" color="inherit" href="/about">
  //      <span className='intro'>About</span> 

  // </Link>
  ];

  return (
    <section>
    <Container>
      <Navbar/>

      <Row className="d-flex p-7 align-items-center justify-content-center"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Col lg={8} md={8} className="p-4">

          <h1 className='name'style={{ textAlign: 'left' }} ><ArrowForwardIosIcon xs={{fontSize:"large", color:"red"}}/> About me</h1>
          <br/>
          <p className='intro'style={{ textAlign: 'left' }}>My name is Tianxiang Ren, based in San Francisco bay area.  </p>
          <p className='intro'style={{ textAlign: 'left' }}>I have proficient technical skills in software and web development and passionate about solving complex business problems. I am looking for a intern position this year or new grad job in 2024. Please feel free to get in touch with me on LinkedIn or via email at: rentxiang@gmail.com.</p>
          {/* <p className='intro'>Currently I am pursuing my Masters in Information Systems at Northeastern University, interning with <Link underline="hover" key="1" color="inherit" href="https://usetract.com"><span className='bold'>TRACT</span></Link> as a software development intern.</p> */}
          <p className='intro'style={{ textAlign: 'left' }}>I am... still working on this page!🤫</p>
          <div>
          <br/>
          
              <Stack spacing={2} style={{margin:20}}>
          
          <Breadcrumbs separator=" " aria-label="breadcrumb" className="d-flex p-7 align-items-center justify-content-center ">
            {breadcrumbs}
          </Breadcrumbs>
          
        </Stack>
          </div>
        </Col>
        <Col lg={2} md={2} className="p-4">
          <img src={Dylan} style={{width:300}} alt="logo" />
        </Col>
      </Row>
      
      <Row style={{paddingTop:0}} >
      <hr />

      </Row>
      <Footer/>
    </Container>
    </section>

    

  );
}

export default Me;