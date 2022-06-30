import "../styles/takeaway.css";
import secount from "../images/2.jpg";
import one from "../images/1.jpg";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

function Takeaway() {
  const { id } = useParams();
  const { states } = useLocation();
  const [show, setshow] = useState(false);
  const [customermshow, setcshow] = useState(false);
  const [ordermenu, setomenu] = useState("Door delivery");

  const handleModal = () => {
    setshow(!show);
  };
  const handlcmodal = () => {
    setcshow(!customermshow);
  };
  useEffect(() => {
    if (id == "order") {
      setomenu("Door delivery");
    } else if (id == "takeaway") {
      setomenu("Take delivery");
    } else if (id == "dinein") {
      setomenu("Dine in");
    } else {
      setomenu("BBQ");
    }
  }, []);
  return (
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-md-5 col-lg-5 col-sm-12 menu">
          <div class="">
            <select id="inputState" class="form-select">
              <option selected>Royal gold Town</option>
            </select>
          </div>
          <div class="mt-1">
            <select id="inputState" class="form-select ">
              <option>{ordermenu}</option>
            </select>
          </div>
          <div class="mt-1">
            <select id="inputState" class="form-select">
              <option selected>Royal gold Town</option>
            </select>
          </div>
          <input
            class="form-control mt-1"
            type="text"
            placeholder="How Many Pepole?"
            aria-label=".form-control-sm example"
          />
          <div class="input-group mt-1">
            <input
              type="text"
              class="form-control"
              aria-label="Text input with checkbox"
              placeholder="Search Sale Item"
            />
            <div class="input-group-text">
              <a
                href="javascripte:void(0)"
                onClick={() => {
                  setshow(true);
                }}
              >
                <i class="bi bi-plus-circle"></i>
              </a>
            </div>
          </div>
          <div class="input-group mb-1">
            <input
              type="text"
              class="form-control"
              aria-label="Text input with checkbox"
              placeholder="Search Sale Item"
            />
            <div class="input-group-text">
              <i class="bi bi-pencil-square"></i>
            </div>
            <div class="input-group-text">
              <i class="bi bi-eye"></i>
            </div>
            <div class="input-group-text">
              <a
                href="javascripte:void(0)"
                onClick={() => {
                  setcshow(true);
                }}
              >
                <i class="bi bi-plus-circle"></i>
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <table class="table text-center">
                <thead class="table">
                  <tr>
                    <th scope="col">Sale Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">
                      <i class="bi bi-trash"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <i class="bi bi-trash"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>

                    <td>
                      <i class="bi bi-trash"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-12">
              <span>Items:</span>
              <br />
              <span>total:</span>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-12">
              <span>5</span>
              <br />
              <span>576.9</span>
            </div>
          </div>
          <div class="row mt-4">
            <div
              class="btn-group "
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" class="btn btn-primary">
                <i class="bi bi-x-lg"></i>&nbsp;&nbsp;Cancel
              </button>

              <button type="button" class="btn btn-success ">
                <a href="dinein_kitchen.html" className="send-kitchen">
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
                    <Nav.Link eventKey="first" align="center">
                      <img src={one} alt="" class="cardimage rounded-circle" />
                      <p>Royal Suki set</p>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col sm={3} md={4} lg={3}>
                  <Nav.Item className="card category">
                    <Nav.Link eventKey="second" align="center">
                      <img
                        src={secount}
                        alt=""
                        class="cardimage rounded-circle"
                      />
                      <p>Vegitables</p>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col sm={3} md={4} lg={3}>
                  <Nav.Item className="card category" id="categ1">
                    <Nav.Link eventKey="third" align="center">
                      <img
                        src={secount}
                        alt=""
                        class="cardimage rounded-circle"
                      />
                      <p>Noodles</p>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col sm={3} md={4} lg={3}>
                  <Nav.Item className="card category">
                    <Nav.Link eventKey="four" align="center">
                      <img
                        src={secount}
                        alt=""
                        class="cardimage rounded-circle"
                      />
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
                        <img
                          src={secount}
                          alt=""
                          class="rounded-circle   cardimage"
                        />
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
                        <img
                          src={secount}
                          alt=""
                          class="rounded-circle   cardimage"
                        />
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
                        <img
                          src={secount}
                          alt=""
                          class="rounded-circle  cardimage"
                        />
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
                        <img
                          src={secount}
                          alt=""
                          class="rounded-circle cardimage"
                        />
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
      {/* order modal */}
      <Modal
        className="modal"
        dialogClassName="modal-container"
        show={show}
        onHide={() => handleModal()}
      >
        <Modal.Header closeButton>ADD RECIPE MANUALLY</Modal.Header>
        <Modal.Body>
          <form class="form-horizontal" role="form">
            <div class="form-group row mt-2">
              <label for="mcode" class="col-sm-4 control-label text-end">
                Recipe Code *
              </label>

              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control kb-pad ui-keyboard-input ui-widget-content ui-corner-all ui-keyboard-autoaccepted"
                  id="mcode"
                  aria-haspopup="true"
                  role="textbox"
                />
              </div>
            </div>
            <div class="form-group row mt-2">
              <label for="mname" class="col-sm-4 control-label text-end">
                {" "}
                Recipe Name *
              </label>

              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control kb-text ui-keyboard-input ui-widget-content ui-corner-all ui-keyboard-autoaccepted"
                  id="mname"
                  aria-haspopup="true"
                  role="textbox"
                />
              </div>
            </div>
            <div class="form-group row mt-2">
              <label for="mquantity" class="col-sm-4 control-label text-end">
                Quantity *
              </label>

              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control kb-pad ui-keyboard-input ui-widget-content ui-corner-all"
                  id="mquantity"
                  aria-haspopup="true"
                  role="textbox"
                />
              </div>
            </div>

            <div class="form-group row mt-2">
              <label for="mprice" class="col-sm-4 control-label text-end">
                {" "}
                Unit Price *
              </label>

              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control kb-pad ui-keyboard-input ui-widget-content ui-corner-all"
                  id="mprice"
                  aria-haspopup="true"
                  role="textbox"
                />
              </div>
            </div>
            <table class="table table-bordered table-striped mt-2">
              <tbody>
                <tr>
                  <th> Net Unit Price</th>
                  <th>
                    <span id="mnet_price">0.00</span>
                  </th>
                </tr>
              </tbody>
            </table>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleModal()}>Submit</Button>
          {/* <Button onClick={() => handleModal()}>Save</Button> */}
        </Modal.Footer>
      </Modal>

      {/* customer add modal */}
      <Modal
        className="modal"
        dialogClassName="modal-container"
        show={customermshow}
        onHide={() => handlcmodal()}
      >
        <Modal.Header closeButton>ADD CUSTOMER</Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-row row">
              <div class="form-group col-6">
                <label for="inputEmail4">Customer Type</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Customer Type"
                />
              </div>
              <div class="form-group mt-2 col-6">
                <label for="inputPassword4">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mt-2 col-6">
                <label for="inputEmail4">Customer Group</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Customer Group"
                />
              </div>
              <div class="form-group mt-2 col-6">
                <label for="inputPassword4">Phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Phone"
                />
              </div>
              <div class="form-group mt-2 col-6">
                <label for="inputEmail4">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Address"
                />
              </div>
              <div class="form-group mt-2 col-6">
                <label for="inputPassword4">Mobile Number </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Mobile Number"
                />
              </div>
              <div class="form-group mt-2 col-6">
                <label for="inputPassword4">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-6 mt-2 d-flex allowloyalty">
                <label for="inputPassword4 ">Allow Loyalty</label>
                <div class="form-check noloyal">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    No
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Yes
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handlcmodal()}>Add Customer</Button>
          <Button onClick={() => handlcmodal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Takeaway;
