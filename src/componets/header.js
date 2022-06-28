import '../styles/header.css';
import Logo from "../images/logo.jpg"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import dine from "../images/dine.png"

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Punch Order" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="View Order" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2">Kitchen</Nav.Link>
                        <NavDropdown title="Billing" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <div className='colum'>
                        <img src={dine} />
                        <NavDropdown title="Reports" id="navbarScrollingDropdown" >
                        
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        </div>
                        

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className="Header ">
        //     <nav class="navbar navbar-expand-lg navbar-light">
        //         <div class="container-fluid">
        //             <div align="center">
        //                 <img src={Logo} class="logo" alt="" style={{ width: "70px" }} />

        //                 <a class="navbar-brand" id="title" href="#" >FooDie Hub</a>
        //             </div>
        //             <div class="">

        //                 <button class="goback mr-2" type="submit"><Link to="/dashboard">Go To Dashboard</Link></button>

        //                 <button className="prevbtn mr-2" >Go Back</button>
        //                 <button class="logout " type="submit"><Link to="/login"><i class="bi bi-box-arrow-in-right" /></Link></button>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    );
}

export default Header;
