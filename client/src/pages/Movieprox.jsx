import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Typography } from "@mui/material";
import Movieprox1 from "../assets/MoviePro1.png";
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



function Movieprox() {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="https://movieprox.vercel.app/">
    <span className='intro'>See Project</span> 
   </Link>,
   <Link underline="hover" key="1" color="inherit" href="/home">
     <span className='intro'>Home</span> 

   </Link>
  //   <Link underline="hover" key="1" color="inherit" href="/about">
  //      <span className='intro'>About</span> 

  // </Link>
  ];

  return (
    <section>
    <Container>
      <Row className="d-flex p-7 align-items-center justify-content-center"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Col lg={6} md={6} className="p-4">

        <h4 className='name' >Movie<span style={{color:"red"}}>Prox</span></h4>
          <br/>
          <p className='intro' style={{ textAlign: 'left' }}>A responsive Nextflix-like website built with MERN (MongoDB, Express, React, Node.js) stack and the
Themoviedb API. Users can sign up, search movies, TVs and people, add movies to favorite list, write reviews.</p>
          <p className='intro'style={{ textAlign: 'left' }}>Developed server APIs with Express and make API calls to the Themoviedb API by deploying Axios clients</p>
          <p className='intro'style={{ textAlign: 'left' }}>Provided user authentication and protection with JWT and Express Validator</p>
          <p className='intro'style={{ textAlign: 'left' }}>Deployed the application on Vercel and host the database on MongoDB Atlas for cloud storage</p>

          <div>
          <br/>
          <a href="https://www.linkedin.com/in/rentxiang/" className="p-3">
          <GitHubIcon color="action" fontSize="large" />
          </a>
          <a href="https://github.com/rentxiang" className="p-3">
          <LinkedInIcon color="action" fontSize="large" />
          </a>

          {/* <a href="https://rentxiang@gmail.com" className="p-3">
          <EmailIcon color="action" fontSize="large" />
          </a> */}
              <Stack spacing={2} style={{margin:20}}>
          
          <Breadcrumbs separator="-" aria-label="breadcrumb" className="d-flex p-7 align-items-center justify-content-center ">
            {breadcrumbs}
          </Breadcrumbs>
          
        </Stack>
          </div>
        </Col>
        <Col lg={3} md={6} className="p-4">
          <img src={Movieprox1} style={{width:500}} alt="logo" />
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

export default Movieprox;