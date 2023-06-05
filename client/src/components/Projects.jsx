import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MoviePro from '../assets/MoviePro1.png';

const Projects = () =>{

    return(
        <section>
            <Container lg={10} md={10} xs={10} className="p-4 ">
            <Row className='d-flex align-items-center justify-content-center'>
                <h3 className='name p-4'>Projects</h3>
            </Row>
            <Row>
                <Col>
                    <img src={MoviePro} width={"300px"} alt='MovieProx'></img>
                </Col>
                {/* <Col></Col> */}
                {/* <Col></Col> */}

            </Row>
        </Container>    
        </section>
        
    )
}

export default Projects;