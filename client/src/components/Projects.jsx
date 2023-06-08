import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieProx from '../assets/MoviePro1.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tract from "../assets/tract.png";
import Box from '@mui/material/Box';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const Projects = () =>{

    const linkStyle = {
        color: 'inherit',
        textDecoration: 'none'
      };

      const [expanded1, setExpanded1] = useState(false);
      const [expanded2, setExpanded2] = useState(false);
      const [expanded3, setExpanded3] = useState(false);

      const handleToggle1 = () => {
        setExpanded1(!expanded1);
      };

      const handleToggle2 = () => {
        setExpanded2(!expanded2);

      };  const handleToggle3 = () => {
        setExpanded3(!expanded3);
      };

      const breadcrumbs1 = [
        <Link underline="hover" key="1" color="inherit" href="https://usetract.com" style={{ marginRight: '10px' }} >
         <span className='intro'>See Project</span> 
        </Link>,
        <Link underline="hover" key="1" color="inherit" href="/tract">
          <span className='intro'>About the Project</span> 
    
        </Link>

      ];

      const breadcrumbs2 = [
        <Link underline="hover" key="1" color="inherit" href="https://movieprox.vercel.app/" style={{ marginRight: '10px' }}>
         <span className='intro'>See Project</span> 
        </Link>,
        <Link underline="hover" key="1" color="inherit" href="/movieprox" >
          <span className='intro'>About the Project</span> 
    
        </Link>

      ];
    return(
        <section  className=''>
            <Container className="p-4">
            <Row className='align-items-center justify-content-center'>
                <Col lg={6} md={6} >
                    <h2 className='name'>Projects</h2>

                </Col>
                <Col lg={3} md={6}></Col>
            </Row>
        {/* project 1 */}
            <Row  style={{ marginTop: 100 }}>
                
                {expanded1 ? (
                <div className='p-0'>
                <Box
                component="span"
                sx={{
                    p: 2,
                    // borderBottom: '1px solid grey',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
                onClick={handleToggle1}
                >
                <h4 className='name' style={{ textAlign: 'left' }}>TRACT</h4>
            
                
                <ArrowIcon
                    className={`rotateIcon ${expanded1 ? 'down' : 'up'}`}
                    style={{ marginLeft: '10px' }}
                />
                
                </Box>
                <Box sx={{ borderBottom: '1px solid grey',display: 'flex', justifyContent: 'space-between', alignItems: 'center'  }}>
                    <div className='intro p-4'> <p className='intro p-4'> Developed the official website page of <span className='bold'>TRACT</span></p>
                    <p className='intro'>Techs used in this project: Typescript, React, AWS services</p>
                    <Breadcrumbs separator=" " aria-label="breadcrumb1" className="d-flex p-4 align-items-center justify-content-center ">
                        {breadcrumbs1}
                    </Breadcrumbs>
                    </div>
                   
                    <img src={tract} className='p-4' style={{width:374}} alt="" />
                </Box>
                </div>
            ):(
            <Box
            component="span"
            sx={{
                p: 2,
                borderBottom: '1px solid grey',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
            }}
            onClick={handleToggle1}
            >
            <h4 className='name' style={{ textAlign: 'left' }}>TRACT</h4>
            <ArrowIcon
                className={`rotateIcon ${expanded1 ? 'down' : 'up'}`}
                style={{ marginLeft: '10px' }}
            />
    </Box>
      )}
            </Row>



            {/* project 2 */}
            <Row style={{ marginTop: 50 }}>

                {expanded2 ? (
                    <div className='p-0'>
                <Box
                component="span"
                sx={{
                    p: 2,
                    // borderBottom: '1px solid grey',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
                onClick={handleToggle2}
                >
            <h4 className='name' style={{ textAlign: 'left' }}>Movie<span style={{color:"red"}}>Prox</span></h4>
            
                
                <ArrowIcon
                    className={`rotateIcon ${expanded2 ? 'down' : 'up'}`}
                    style={{ marginLeft: '10px' }}
                />
        
        </Box>
        <Box sx={{ borderBottom: '1px solid grey',display: 'flex', justifyContent: 'space-between', alignItems: 'center'  }}>
                    <div className='intro p-4'> <p className='intro p-4'> MovieProx is a Fullstack Responsive Movie Website with MERN stack and Themoviedb API.</p>
                    <p className='intro'>Techs used in this project: Javascript, React, Node.js, Mongoose</p>
                    <Breadcrumbs separator=" " aria-label="breadcrumb2" className="d-flex p-4 align-items-center justify-content-center ">
                        {breadcrumbs2}
                    </Breadcrumbs>
                    </div>
                   
                    <img src={MovieProx} className='p-4' style={{width:374}} alt="" />
                </Box>
        </div>
            ):(
            <Box
            component="span"
            sx={{
                p: 2,
                borderBottom: '1px solid grey',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
            }}
            onClick={handleToggle2}
            >
            <h4 className='name' style={{ textAlign: 'left' }}>Movie<span style={{color:"red"}}>Prox</span></h4>
            <ArrowIcon
                className={`rotateIcon ${expanded2 ? 'down' : 'up'}`}
                style={{ marginLeft: '10px' }}
            />
    </Box>
      )}
                {/* <Box component="span" sx={{ p: 2, borderBottom: '1px solid grey', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 className='name' style={{ textAlign: 'left' }}>Movie<span style={{color:"red"}}>Prox</span></h4>
                    <a href="https://tianxiangren.vercel.app">
                    <ArrowIcon style={{ marginLeft: '10px', }} />
                    </a>
                </Box> */}
            </Row>

            {/* <Row style={{ marginTop: 50 }}>
   
      
      
        {expanded3 ? (
            <div className='p-0'>
        <Box
        component="span"
        sx={{
            p: 2,
            // borderBottom: '1px solid grey',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer'
        }}
        onClick={handleToggle3}
        >
        <h4 className='name' style={{ textAlign: 'left' }}>TRACT</h4>
      
          
        <ArrowIcon
            className={`rotateIcon ${expanded3 ? 'down' : 'up'}`}
            style={{ marginLeft: '10px' }}
        />
        
        </Box>
        <Box sx={{  borderBottom: '1px solid grey',display: 'flex' }}>
            <span className='intro'>- sss</span>
            <img src={tract} style={{width:374}} alt="" />
        </Box>
        </div>
            ):(
            <Box
            component="span"
            sx={{
                p: 2,
                borderBottom: '1px solid grey',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
            }}
            onClick={handleToggle3}
            >
            <h4 className='name' style={{ textAlign: 'left' }}>TRACT</h4>
            <ArrowIcon
                className={`rotateIcon ${expanded3 ? 'down' : 'up'}`}
                style={{ marginLeft: '10px' }}
            />
    </Box>
      )}
    </Row> */}
    
                

                
        </Container>    
        </section>
        
    )
}

export default Projects;