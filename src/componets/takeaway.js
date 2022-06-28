import '../styles/takeaway.css';
import secount from "../images/2.jpg"
import one from "../images/1.jpg";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
function Takeaway() {
    return (
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-5 col-lg-5 col-sm-12 menu">
                    <div class="">
                        <select id="inputState" class="form-select">


                            <option selected>Royal gold Town</option>


                            <option>1</option>
                            <option>2</option>
                            <option>3</option>

                        </select>
                    </div>
                    <div class="mt-1">
                        <select id="inputState" class="form-select ">


                            <option selected>Royal gold Town</option>


                            <option>1</option>
                            <option>2</option>
                            <option>3</option>

                        </select>
                    </div>
                    <div class="mt-1">
                        <select id="inputState" class="form-select">


                            <option selected>Royal gold Town</option>


                            <option>1</option>
                            <option>2</option>
                            <option>3</option>

                        </select>
                    </div>
                    <input class="form-control mt-1" type="text" placeholder="How Many Pepole?" aria-label=".form-control-sm example" />
                    <div class="input-group mt-1">

                        <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Search Sale Item" />
                        <div class="input-group-text">
                            <i class="bi bi-plus-circle"></i>
                        </div>
                    </div>
                    <div class="input-group mb-1" >

                        <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Search Sale Item" />
                        <div class="input-group-text">
                            <i class="bi bi-pencil-square"></i>
                        </div>
                        <div class="input-group-text">
                            <i class="bi bi-eye"></i>
                        </div>
                        <div class="input-group-text">
                            <i class="bi bi-plus-circle"></i>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-md-12 col-lg-12 col-sm-12">
                            <table class="table text-center" >
                                <thead class="table" >
                                    <tr>
                                        <th scope="col">Sale Item</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Subtotal</th>
                                        <th scope="col"><i class="bi bi-trash"></i></th>



                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>@fat</td>
                                        <td><i class="bi bi-trash"></i></td>



                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>@fat</td>

                                        <td><i class="bi bi-trash"></i></td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-sm-12">
                            <span>Items:</span><br />
                            <span>total:</span>

                        </div>
                        <div class="col-md-6 col-lg-6 col-sm-12">
                            <span>5</span><br />
                            <span>576.9</span>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="btn-group " role="group" aria-label="Basic mixed styles example">
                            <button type="button" class="btn btn-primary"><i class="bi bi-x-lg"></i>&nbsp;&nbsp;Cancel</button>

                            <button type="button" class="btn btn-success ">
                                <a href="dinein_kitchen.html" className="send-kitchen" >
                                    <i class="bi bi-send-fill "></i>&nbsp;&nbsp;Send to Kitchen

                                </a>
                            </button>
                        </div>

                    </div>
                </div>
                <div class="col-md-7 col-lg-7 col-sm-12">


                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">


                        <Nav variant="pills" className="flex-column">
                            <Row>
                                <Col sm={3} md={4} lg={3}>
                                    <Nav.Item className="card category">
                                        <Nav.Link eventKey="first" align="center" >

                                            <img src={one} alt="" class="cardimage rounded-circle" />
                                            <p>Royal Suki set</p>

                                        </Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col sm={3} md={4} lg={3}>
                                    <Nav.Item className="card category">
                                        <Nav.Link eventKey="second" align="center">
                                            <img src={secount} alt="" class="cardimage rounded-circle" />
                                            <p>Vegitables</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col sm={3} md={4} lg={3}>
                                    <Nav.Item className="card category" id="categ1">
                                        <Nav.Link eventKey="third" align="center">
                                            <img src={secount} alt="" class="cardimage rounded-circle" />
                                            <p>Noodles</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col sm={3} md={4} lg={3}>
                                    <Nav.Item className="card category">
                                        <Nav.Link eventKey="four" align="center">
                                            <img src={secount} alt="" class="cardimage rounded-circle" />
                                            <p>Chicken</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Col>

                            </Row>
                        </Nav>
                        <hr />

                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="row">
                                    <div class="col-lg-2 col-md-4 border submenu  col-sm-12">
                                        <div class="">
                                            <div class="card-body" align="center">
                                                <img src={one} alt="" class="cardimage" />

                                            </div>


                                            <p class="card_paragraph">Aballon Slice</p>

                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-2 border submenu  col-sm-12">
                                        <div class=" ">
                                            <div class="card-body" align="center">
                                                <img src={secount} alt="" class="rounded-circle   cardimage" />


                                            </div>

                                            <p class="card_paragraph">Aballon Slice</p>

                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="row ">
                                    <div class="row cardrow" id="categorylist">
                                        <div class="col-lg-2  col-md-4  col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />

                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>

                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <div className="row">
                                    <div class="col-lg-2 col-md-4 border submenu  col-sm-12">
                                        <div class="">
                                            <div class="card-body" align="center">
                                                <img src={one} alt="" class="cardimage" />

                                            </div>


                                            <p class="card_paragraph">Aballon Slice</p>

                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-2 border submenu  col-sm-12">
                                        <div class=" ">
                                            <div class="card-body" align="center">
                                                <img src={secount} alt="" class="rounded-circle   cardimage" />


                                            </div>

                                            <p class="card_paragraph">Aballon Slice</p>

                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="row ">
                                    <div class="row cardrow" id="categorylist">
                                        <div class="col-lg-2 col-md-4 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />

                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>

                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>

                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <div className="row">
                                    <div class="col-lg-2 col-md-4 border submenu  col-sm-12">
                                        <div class="">
                                            <div class="card-body" align="center">
                                                <img src={one} alt="" class="cardimage" />

                                            </div>


                                            <p class="card_paragraph">Aballon Slice</p>

                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-2 border submenu  col-sm-12">
                                        <div class=" ">
                                            <div class="card-body" align="center">
                                                <img src={secount} alt="" class="rounded-circle  cardimage" />


                                            </div>

                                            <p class="card_paragraph">Aballon Slice</p>

                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="row ">
                                    <div class="row cardrow" id="categorylist">
                                        <div class="col-lg-2 col-md-4 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />

                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>

                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </Tab.Pane>

                            <Tab.Pane eventKey="four">
                            <div className="row">
                                    <div class="col-lg-2 col-md-4 border submenu  col-sm-12">
                                        <div class="">
                                            <div class="card-body" align="center">
                                                <img src={one} alt="" class=" cardimage" />

                                            </div>


                                            <p class="card_paragraph">Aballon Slice</p>

                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-2 border submenu  col-sm-12">
                                        <div class=" ">
                                            <div class="card-body" align="center">
                                                <img src={secount} alt="" class="rounded-circle cardimage" />


                                            </div>

                                            <p class="card_paragraph">Aballon Slice</p>

                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="row ">
                                    <div class="row cardrow" id="categorylist">

                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />

                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>

                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/2.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={one} alt="" class="cardimage" />

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2 col-sm-12">
                                            <div class="card ">
                                                <div class="card-body">
                                                    <img src={secount} alt="" class="cardimage" />
                                                    {/* <img src="images/1.jpg" alt="" style="width: 70px;"  class="cardimage"> */}

                                                </div>

                                            </div>
                                            <div class="menucard">
                                                <p class="card_paragraph">Aballon Slice</p>
                                                <span>$.0998</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </Tab.Pane>
                        </Tab.Content>

                    </Tab.Container>




                </div>

            </div>

        </div>

    )
}

export default Takeaway