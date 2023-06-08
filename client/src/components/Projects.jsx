import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieProx from '../assets/Movieprox1.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tract from "../assets/Tract1.png";
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
        // <Link underline="hover" key="1" color="inherit" href="/tract">
        //   <span className='intro'>About the Project</span> 
    
        // </Link>

      ];

      const breadcrumbs2 = [
        <Link underline="hover" key="1" color="inherit" href="https://movieprox.vercel.app/" style={{ marginRight: '10px' }}>
         <span className='intro'>See Project</span> 
        </Link>,
        // <Link underline="hover" key="1" color="inherit" href="/movieprox" >
        //   <span className='intro'>About the Project</span> 
    
        // </Link>

      ];
    return(
        <section  className=''>
            <Container className="p-4">
            <Row className='align-items-center justify-content-center'>
                <Col lg={8} md={6} >
                            <h2 className='name' style={{ textAlign: 'left' }}>Projects</h2>
                            <Row  style={{ marginTop: 100 }}>
                        
                        {expanded1 ? (
                        <div className='p-0' >
                            
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
                            
                            <div className='intro p-4'style={{ textAlign: 'left' }}> 
                            <img src={tract} className='p-4' style={{width:500}} alt="" />

                            {/* <p className='intro'style={{ textAlign: 'left' }}> Developed the official website page of <span className='bold'>TRACT</span></p> */}
                                <p className="boldsub pt-4">  📝 ABOUT: </p> 

                                <p className='intro' style={{ textAlign: 'left' }}>Interning at <Link underline="hover" key="1" color="inherit" href="https://usetract.com"><span className='bold'>TRACT</span></Link>, I lead a team in frontend development by using TypeScript and React, developed the official website page of <Link underline="hover" key="1" color="inherit" href="https://usetract.com"><span className='bold'>TRACT</span></Link>, improving website's UI/UX.</p>
                                <p className="boldsub pt-4">  🤖 TECHS: </p> 
                                
                                <p className='intro'style={{ textAlign: 'left' }}>Typescript, Next.js, React, AWS services</p>
                                <p className="boldsub pt-4">  👨‍💻 MY POSITION: </p> 
                                 
                                <p className='intro'style={{ textAlign: 'left' }}>Contribute to the user Authentication and Authorization APIs development and integration with Next.js in the
                        backend, working closely with the team to optimize performance and functionality; Publish website updates with AWS EC2 and Nginx, ensuring seamless deployment and accessibility for end-users.</p>
                                {/* <p className='intro'style={{ textAlign: 'left' }}>Publish website updates with AWS EC2 and Nginx, ensuring seamless deployment and accessibility for end-users</p> */}

                            <Breadcrumbs separator=" " aria-label="breadcrumb1" className="d-flex p-4 align-items-center justify-content-center ">
                                {breadcrumbs1}
                            </Breadcrumbs>
                            </div>
                        
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
                                        <div className='intro p-4'style={{ textAlign: 'left' }}> 
                                        <img src={MovieProx} className='p-4' style={{width:500}} alt="" />
                                        <p className="boldsub pt-4">  📝 ABOUT: </p> 
                                        <p className='intro' style={{ textAlign: 'left' }}>MovieProx is a fullstack responsive Nextflix-like website built with MERN (MongoDB, Express, React, Node.js) stack and the
                                    Themoviedb API. Users can sign up, search movies, TVs and people, add movies to favorite list, write reviews.</p>
                                    <p className="boldsub pt-4">  🤖 TECHS: </p> 

                                    <p className='intro' style={{ textAlign: 'left' }}>Javascript, React, Node.js, Mongoose</p>
                                    <p className="boldsub pt-4">  👨‍💻 MY POSITION: </p> 
                                    
                                    <p className='intro'style={{ textAlign: 'left' }}>Developed server APIs with Express and make API calls to the Themoviedb API by deploying Axios clients; Provided user authentication and protection with JWT and Express Validator; Deployed the application on Vercel and host the database on MongoDB Atlas for cloud storage</p>
                                    {/* <p className='intro'style={{ textAlign: 'left' }}>Provided user authentication and protection with JWT and Express Validator</p> */}
                                    {/* <p className='intro'style={{ textAlign: 'left' }}>Deployed the application on Vercel and host the database on MongoDB Atlas for cloud storage</p> */}
                                        <Breadcrumbs separator=" " aria-label="breadcrumb2" className="d-flex p-4 align-items-center justify-content-center ">
                                            {breadcrumbs2}
                                        </Breadcrumbs>
                                        </div>
                                    
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
                                    
                                    </Row>
            </Col>
                {/* Whole Body Border*/}

                <Col lg={2} md={6}></Col
                >
            </Row>
        

                
        </Container>    
        </section>
        
    )
}

export default Projects;