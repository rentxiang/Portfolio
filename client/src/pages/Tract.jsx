import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Typography } from "@mui/material";
import Tract1 from "../assets/tract.png";
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



function Tract() {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="https://usetract.com">
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

          <h1 className='name' >TRACT</h1>
          <br/>
          <p className='intro' style={{ textAlign: 'left' }}>Interning with <Link underline="hover" key="1" color="inherit" href="https://usetract.com"><span className='bold'>TRACT</span></Link> , I lead a team in frontend development with TypeScript and React, improving website's UI/UX</p>
          <p className='intro'style={{ textAlign: 'left' }}>Contribute to the user Authentication and Authorization APIs development and integration with Next.js in the
backend, working closely with the team to optimize performance and functionality</p>
          <p className='intro'style={{ textAlign: 'left' }}>Publish website updates with AWS EC2 and Nginx, ensuring seamless deployment and accessibility for end-users</p>
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
          <img src={Tract1} style={{width:500}} alt="logo" />
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

export default Tract;