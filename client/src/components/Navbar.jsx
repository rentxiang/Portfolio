import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Typography } from "@mui/material";
import Dylan from "../assets/kid_Dylan.jpeg";
import React, {useRef} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const Navbar =  () =>{
    

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
       <span className='intro'>Home</span> 
      </Link>,
       <Link href="/#projects" underline="hover" key="1" color="inherit">
       <span className='intro'>Projects</span>
      </Link>,
        <Link underline="hover" key="1" color="inherit" href="/me">
         <span className='intro'>About Me</span> 
        </Link>,
       
       
      
      ];
     

    return(
        <Container>

            <Row className="d-flex justify-content-end" style={{ marginTop: 50 }}>
                <Col xs="auto" className="ms-auto">
                    <Breadcrumbs separator="" aria-label="breadcrumb">
                    {breadcrumbs}
                    </Breadcrumbs>
                    
                </Col>
            </Row>
            {/* <Row className="d-flex align-items-center justify-content-end">   
                <Box >
                <Breadcrumbs separator="-" aria-label="breadcrumb" className="d-flex p-7 align-items-center justify-content-center ">
                    {breadcrumbs}
                </Breadcrumbs>
                </Box>       
                
            </Row> */}
        </Container>
    )
}

export default Navbar