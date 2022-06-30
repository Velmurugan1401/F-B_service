import '../styles/header.css';
import Logo from "../images/logo8.png"
import { Link, useNavigate } from "react-router-dom";
import kitchen from "../images/loyalty.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import dine from "../images/dine.png"

function Header() {

    const navigate = useNavigate();
    const pagenav = (e) => {
        return navigate(e, { replace: true })
    }

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

                                    <NavDropdown.Item onClick={() => { pagenav("/dinein") }} href="javascripte:void(0)">Dine In </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/menu/takeaway") }} href="javascripte:void(0)">
                                        Take Away
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/menu/order") }} href="javascripte:void(0)" >
                                        Door Delivery
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/bbq") }} href="javascripte:void(0)">
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
                                <Nav.Link onClick={() => { pagenav("/kitchen") }} href="javascripte:void(0)" className="nav-item-1" >
                                    <div style={{ display: "inline-block" }} className="colum text-center"> <img src={kitchen} /><div>Kitchen</div> </div>
                                </Nav.Link>
                                <NavDropdown title={<div style={{ display: "inline-block" }} className="colum text-center"> <img src={dine} /><div>Billing</div> </div>} id="navbarScrollingDropdown" >
                                    <NavDropdown.Item onClick={() => { pagenav("/billing/dinein") }} href="javascripte:void(0)" >Dine In </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/billing/takeaway") }} href="javascripte:void(0)" >
                                        Take Away
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/billing/doordelivery") }} href="javascripte:void(0)">
                                        Door Delivery
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/billing/bbq") }} href="javascripte:void(0)">
                                        BBQ
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/billing/bbqdinein") }} href="javascripte:void(0)">
                                        BBQ With Dine In
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/billing/billreprint") }} href="javascripte:void(0)">
                                        Bill Reprint
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/billing/bbqbillr") }} href="javascripte:void(0)">
                                        BBQ Bill Reprint
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/billing/bbqwdineinr") }} href="javascripte:void(0)">
                                        BBQ With Dine In Reprint
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/billing/bbqitemreport") }} href="javascripte:void(0)">
                                        BBQ Item Return
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title={<div style={{ display: "inline-block" }} className="colum text-center"> <img src={dine} /><div>Reports</div> </div>} id="navbarScrollingDropdown" >

                                    <NavDropdown.Item onClick={() => { pagenav("/pos/reports/?type=1") }} href="javascripte:void(0)">Today Item Wise Sale Report</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/pos/reports/?type=2") }} href="javascripte:void(0)" >
                                        Day's Summary
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/pos/reports/?type=3") }} href="javascripte:void(0)">
                                        Cashier Wise Sales Report
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/pos/reports/?type=4") }} href="javascripte:void(0)">
                                        POS Settlement Report
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { pagenav("/pos/reports/?type=5") }} href="javascripte:void(0)">
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

    );
}

export default Header;
