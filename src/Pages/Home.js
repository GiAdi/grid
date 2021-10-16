import React from "react";
import { Container, Row, Col, Navbar, Nav, Card, Button, Badge, Image } from "react-bootstrap";

const Home = () => {
    return (
        <Container fluid style={{ background: '#1A171E' }}>
            <Row>
                <Col lg={{ span: 8, order: 'first' }} xs={{ span: 12, order: 'last' }}>
                    <Container >
                        <Navbar variant="dark" style={{ padding: '5rem'}} >
                                <Row style={{width:'100%'}} className='justify-content-between'> 
                                    <Col xs='auto'>
                                        <Navbar.Brand href="#home" style={{fontSize:'2.5rem'}}>
                                            <Image fluid src='Grid.png' />
                                            Grid
                                        </Navbar.Brand>
                                    </Col>
                                    <Col xs={12} md='auto' className='d-flex align-items-center justify-content-center'>
                                        <Nav className="justify-content-end" >
                                            <Nav.Link href="#products">Products</Nav.Link>
                                            <Nav.Link href="#prime">Prime</Nav.Link>
                                            <Nav.Link href="#community">Community</Nav.Link>
                                        </Nav>
                                    </Col>
                                </Row>
                        </Navbar>
                        <Row >
                            <Col className='d-flex justify-content-center'>
                                <Card style={{ position: 'relative', width: '30rem', color: "white", background: '#1A171E', border:'none' }}>
                                    <Card.Body style={{border:'none'}}>
                                        <Card.Title style={{fontSize:'2rem'}}>
                                            More than 60 Lac business owners and freelancers are saving 40 minis of every new client veting by just one click
                                        </Card.Title>
                                        <br />
                                        <Card.Text style={{ color: '#909090', fontSize: '1rem' }}>
                                            Create a free Grid card today and share on the go to all your clients and customers and network efficiently. You can save more than 600 hours every year in just one click.
                                        </Card.Text>
                                        <br />
                                        <Row>
                                            <Col xs='auto'>
                                                <Badge pill bg='danger' style={{ cursor: 'pointer', padding: '10px 15px' }}> Start free </Badge>
                                            </Col>
                                            <Col xs='auto'>
                                                <Badge pill bg='secondary' style={{ cursor: 'pointer', padding: '10px 15px' }}> Become a prime </Badge>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg={{ order: 'last' }} xs={{ order: 'first' }}>
                    <Container style={{display:'relative'}}>
                        <Row>
                            {/* <Col style={{position:'relative', bottom:'12rem'}}> */}
                                <Col>
                                    <Row style={{ margin: '0.5rem 0px', position:'relative', bottom:'12rem' }}>
                                        <Col className='d-flex align-items-center'>a
                                            <Image fluid src='./1.png' style={{ borderRadius: '45%/25%' }} />
                                        </Col>
                                    </Row>
                                    <Row style={{ margin: '0.5rem 0px', position:'relative', bottom:'12rem' }}>
                                        <Col className='d-flex align-items-center'>
                                            <Image fluid src='./2.png' style={{ borderRadius: '45%/25%' }} />
                                        </Col>
                                    </Row>
                                    <Row style={{ margin: '0.5rem 0px', position:'relative', bottom:'12rem' }}>
                                        <Col className='d-flex align-items-center'>
                                            <Image fluid src='./3.png' style={{ borderRadius: '45%/25%' }} />
                                        </Col>
                                    </Row>
                            </Col>
                            {/* <Col style={{position:'relative', bottom:'1rem'}}> */}
                            <Col>
                                    <Row style={{ margin: '0.5rem 0px', position:'relative', bottom:'1rem' }}>
                                        <Col className='d-flex align-items-center'>
                                            <Image fluid src='./4.png' style={{ borderRadius: '45%/25%' }} />
                                        </Col>
                                    </Row>
                                    <Row style={{ margin: '0.5rem 0px', position:'relative', bottom:'1rem' }}>
                                        <Col className='d-flex align-items-center'>
                                            <Image fluid src='./5.png' style={{ borderRadius: '45%/25%' }} />
                                        </Col>
                                    </Row>
                                    <Row style={{ margin: '0.5rem 0px', position:'relative', bottom:'1rem' }}>
                                        <Col className='d-flex align-items-center'>
                                            <Image fluid src='./6.png' style={{ borderRadius: '45%/25%' }} />
                                        </Col>
                                    </Row>
                            </Col>
                            {/* <Col style={{position:'relative', top:'14rem'}}> */}
                            <Col>
                                    <Row>
                                        <Col style={{color:'white'}}>a</Col>
                                    </Row>
                                    <Row style={{ margin: '0.5rem 0px', position:'relative', top:'12rem' }}>
                                        <Col className='d-flex align-items-center'>
                                            <Image fluid src='./7.png' style={{ borderRadius: '45%/25%' }} />
                                        </Col>
                                    </Row>
                                    <Row style={{ margin: '0.5rem 0px', position:'relative', top:'14rem' }}>
                                        <Col className='d-flex align-items-center'>
                                            <Image fluid src='./8.png' style={{ borderRadius: '45%/25%' }} />
                                        </Col>
                                    </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;