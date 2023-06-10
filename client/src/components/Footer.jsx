    import {Container, Col, Row } from 'react-bootstrap'

    const Footer =() =>{

        return(
            <section>
                <Container className=''>
                <Row className='align-items-center justify-content-center' style={{marginTop:100, textAlign:'left'}}>
                    <Col lg={8}><p className='intro'style={{fontSize:'12px'}}> © 2023 by Tianxiang Ren</p></Col>
                    <Col lg={2}></Col>

                </Row>
            </Container>
            </section>
            
        )
    }

    export default Footer