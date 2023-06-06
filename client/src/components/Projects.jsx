import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MoviePro from '../assets/MoviePro1.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tract from "../assets/tract.png";
import Box from '@mui/material/Box';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';

const Projects = () =>{

    const linkStyle = {
        color: 'inherit',
        textDecoration: 'none'
      };

    return(
        <section>
            <Container className="p-4 ">
            <Row className='align-items-center justify-content-center'>
                <Col lg={6} md={6} >
                    <h2 className='name'>Projects</h2>

                </Col>
                <Col lg={3} md={6}></Col>
            </Row>
            
            <Row style={{ marginTop: 100 }}>
                <Box component="span" sx={{ p: 2, borderBottom: '1px solid grey', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 className='name' style={{ textAlign: 'left' }}>TRACT</h4>
                    <a href="https://usetract.com">
                    <ArrowIcon style={{ marginLeft: '10px' }} />
                    </a>
                </Box>
            </Row>
            <Row style={{ marginTop: 100 }}>
                <Box component="span" sx={{ p: 2, borderBottom: '1px solid grey', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 className='name' style={{ textAlign: 'left' }}>Movie<span style={{color:"red"}}>Prox</span></h4>
                    <a href="https://tianxiangren.vercel.app">
                    <ArrowIcon style={{ marginLeft: '10px', }} />
                    </a>
                </Box>
            </Row>
            
                
				{/* <h2 className='projh2'>TRACT</h2>
				<nav className="nav-fillpath">
					<a className="next" href="https://usetract.com">
						<span className="icon-wrap"></span>
						<h3><strong>TRACT</strong>'s Official Website</h3>
					</a>
				</nav> */}
                {/* <Card style={{height:400, width:300}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={MoviePro}
                    />
                    <CardContent>
                        <h5 className='name'>MovieProx</h5>
                        
                        <p className='intro'>MovieProx is a Fullstack Responsive Movie Website with MERN stack and Themoviedb API.</p>
                        <Button size="small">Learn More</Button>
                    
                    </CardContent>
                   
                    </Card> */}
                
        </Container>    
        </section>
        
    )
}

export default Projects;