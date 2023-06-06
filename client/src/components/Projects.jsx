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

const Projects = () =>{

    return(
        <section>
            <Container className="p-4 ">
            <Row className='align-items-center justify-content-center'>
                <Col lg={6} md={6} >
                    <h2 className='name'>Projects</h2>

                </Col>
                <Col lg={3} md={6}></Col>
            </Row>
            <Row className='d-flex align-items-center justify-content-center transparent-section' style={{marginTop:100}}>
                <Col lg={6} md={6}  className='d-flex align-items-center justify-content-left'>
                <h4 className='name'>TRACT</h4>
                <section className="color-1">
                
				<h2 className='projh2'>TRACT</h2>
				<nav className="nav-fillpath">
					<a className="next" href="https://usetract.com">
						<span className="icon-wrap"></span>
						<h3><strong>TRACT</strong>'s Official Website</h3>
					</a>
				</nav>
			    </section>
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
                </Col>
                <Col lg={6} md={6}  className='d-flex align-items-center justify-content-left'>
                    <h4 className='name'>Movie<span style={{color:"red"}}>Prox</span></h4>
                    <section className="color-1">
                    
                    <h2 className='projh2'>MovieProx</h2>
                    <nav className="nav-fillpath">
                        <a className="next" href="https://movieprox.vercel.app/">
                            <span className="icon-wrap"></span>
                            <h3><strong>MovieProx </strong>Website</h3>
                        </a>
                    </nav>
                    </section>
                </Col>
            </Row>
        </Container>    
        </section>
        
    )
}

export default Projects;