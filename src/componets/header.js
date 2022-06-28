import '../styles/header.css';
import Logo from "../images/logo8.png"
import { Link } from "react-router-dom";
import kitchen from "../images/loyalty.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import dine from "../images/dine.png"

function Header() {
    return (

        <div className='container-fluid pos-header'>
            <div className='row'>
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 pos_logo_front">
                    <img src={Logo} alt="Srampos" class="sram_table_logo" />


                </div>
                <div className='col-lg-9 col-md-9 col-sm-9 col-xs-12 custom_details'>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <NavDropdown title={<div style={{ display: "inline-block" }} className="colum text-center"> <img src={dine} /><div>Punch Order</div> </div>} id="navbarScrollingDropdown" >

                                    <NavDropdown.Item href="#action3">Dine In </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Take Away
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Door Delivery
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        BBQ
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={<div style={{ display: "inline-block" }} className="colum text-center"> <img src={dine} /><div>View Orders</div> </div>} id="navbarScrollingDropdown" >

                                    <NavDropdown.Item href="#action3">Dine In </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Take Away
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Door Delivery
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        BBQ
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link" className="nav-item-1" >
                                    <div style={{ display: "inline-block" }} className="colum text-center"> <img src={kitchen} /><div>Kitchen</div> </div>
                                </Nav.Link>
                                <NavDropdown title={<div style={{ display: "inline-block" }} className="colum text-center"> <img src={dine} /><div>Billing</div> </div>} id="navbarScrollingDropdown" >
                                    <NavDropdown.Item href="#action3">Dine In </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Take Away
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Door Delivery
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        BBQ
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        BBQ With Dine In
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Bill Reprint
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        BBQ Bill Reprint
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        BBQ With Dine In Reprint
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        BBQ Item Return
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title={<div style={{ display: "inline-block" }} className="colum text-center"> <img src={dine} /><div>Reports</div> </div>} id="navbarScrollingDropdown" >

                                    <NavDropdown.Item href="#action3">Today Item Wise Sale Report</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                    Day's Summary
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                    Cashier Wise Sales Report
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                    POS Settlement Report
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                    Shift Wise Report
                                    </NavDropdown.Item>
                                    
                                </NavDropdown>



                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12 log_out">
                    <ul>
                        <li> <a class="req_status pos_head_req btn btn-default" href="http://192.168.20.3/fobyl/admin/pos/order_biller/?type=1" data-notify-type="notice">Request Bil</a><input type="hidden" name="rep_count" id="rep_count" value="" /><span class="req_sound">&nbsp;</span></li>
                        <li><a href="http://192.168.20.3/fobyl/frontend/logout" onclick=" localStorage.clear();"><button type="button" class="btn btn-default" title="Log Out"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout </button></a></li>
                    </ul>
                </div>
            </div>
        </div>


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
