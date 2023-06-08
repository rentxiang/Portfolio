import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Typography } from "@mui/material";
import Dylan from "../assets/kid_Dylan.jpeg";
import React, {useState, useEffect} from "react";
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
    
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
      const storedIndex = localStorage.getItem('activeIndex');
      if (storedIndex) {
        setActiveIndex(Number(storedIndex));
      }
    }, []);

    const handleItemClick = (index) => {
        if (activeIndex === index) {
          setActiveIndex(null);
          localStorage.removeItem('activeIndex');
        } else {
          setActiveIndex(index);
          localStorage.setItem('activeIndex', index.toString());
        }
      };

    const breadcrumbs = [
 
    <Link underline="" key="1" color="inherit" href="/">
    <span
      className={`intro ${activeIndex === 0 ? 'active' : ''}`}
      onClick={() => handleItemClick(0)}
    >
      {activeIndex === 0 && <NavigateNextIcon />}
      Home
    </span>
  </Link>,
        <Link href="/#projects" underline="" key="1" color="inherit">
        <span
          className={`intro ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          {activeIndex === 1 && <NavigateNextIcon />}
          Projects
        </span>
      </Link>,
      <Link underline="" key="1" color="inherit" href="/me">
        <span
          className={`intro ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          {activeIndex === 2 && <NavigateNextIcon />}
          About Me
        </span>
      </Link>,
       
       
      
      ];
     

    return(
        <Container>

            <Row className="d-flex justify-content-end" style={{ paddingTop: 50 }}>
                <Col lg={7}/>
                <Col lg={3} className="">
                    <Breadcrumbs separator="" aria-label="breadcrumb">
                    {breadcrumbs}
                    </Breadcrumbs>
                    
                </Col>
            </Row>
            
        </Container>
    )
}

export default Navbar