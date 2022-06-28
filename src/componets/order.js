import {useState} from "react"
import Collapse from "react-bootstrap/Collapse"
import "../styles/order.css"

function Order() {
    const [show , setShow] = useState(true)
    const showmodal = ()=>{
      setShow(!show)
    }

    return (
        <div className="mt-5">
            <div class="container">
                <div class="row mb-3" >

                    <div class="col-lg-2 col-md-2 col-sm-12" >
                        <a href="javascript:void(0)" onClick={showmodal} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >

                            <button class=" button1" type="submit">

                                DineIn</button>
                        </a>
                    </div>

                    <div class="col-lg-2 col-md-2 col-sm-12" >
                        <a href="javascript:void(0)" onClick={showmodal} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >

                            <button class=" button1" type="submit">

                                Take Away</button>
                        </a>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12" >
                        <a href="javascript:void(0)" onClick={showmodal} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >

                            <button class=" button1" type="submit">

                                Door Delivery</button>
                        </a>
                    </div>

                    <div class="col-lg-2 col-md-2 col-sm-12" >
                        <a href="javascript:void(0)" onClick={showmodal} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >

                            <button class=" button1" type="submit">

                                BBQ</button>
                        </a>
                    </div>



                </div>
                <Collapse in={show}>
                <div class="collapse" id="collapseExample" >

                    <div class="row mb-3" >
                        <div class="col-md-6 col-sm-12">
                            <div class="row" >
                                <div class="input-group p-0">
                                    <div class="input-group-text" id="btnGroupAddon" >
                                        <img src="images/table1.png" alt="" />
                                    </div>
                                    <lable type="text" class="table-name" aria-describedby="btnGroupAddon"
                                    >TABLE 1</lable>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-sm-12 split">
                            <button class="green_button" type="submit">New split</button>

                        </div>
                    </div>

                    <div class="row mb-3" >
                        <div class="col-md-6 col-sm-12">
                            <input type="checkbox" />
                            <span class="span_color">SPl0974564657445(Walkin Customer)</span>
                        </div>

                        <div class="col-md-6 col-sm-12 split" >
                            <button class="change_button">Change Table</button>
                            <button class="change_button">Change Customer</button>


                        </div>
                    </div>




                    <div class="row mb-3 ">

                        <div class="split col-sm-12" >
                            <button class="change_button">New order item</button>
                            <button class="red_button ">Kot Print</button>
                            <button class="red_button">Cancel All</button>
                            <button class="change_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bill Generator</button>
                        </div>
                    </div>

                    <div class="row coid " >

                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <span class="span_color">ORDER2908908809</span>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
                            <span class="span_color">Status:
                                <a href="http:/">Open</a>
                            </span>


                        </div>
                    </div>
                    <div class="row coid mb-3" >

                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <img src="images/1.jpg" alt="" />
                            <label>Itly</label>
                            <span class="dollar">$2.0</span>

                            <button class="inprocess">Inprocess</button>

                        </div>
                        <div class="col-sm-12 col-md-2 col-lg-2 kotprint1">
                            <span >
                                <span >
                                    <input type="checkbox" />
                                    <button class="red_button">Cancel</button>
                                </span>
                            </span>


                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <img src="images/2.jpg" alt="" />
                            <label>Itly</label>
                            <span class="dollar">$2.0</span>

                            <button class="inprocess">Inprocess</button>

                        </div>
                        <div class="col-sm-12 col-md-2 col-lg-2 kotprint1">
                            <span >
                                <span >
                                    <input type="checkbox" />
                                    <button class="red_button">Cancel</button>
                                </span>
                            </span>


                        </div>
                    </div>

                    <div class="row mb-3" >
                        <div class="col-md-6 col-sm-12">
                            <div class="row" >
                                <div class="input-group p-0">
                                    <div class="input-group-text" id="btnGroupAddon" >
                                        <img src="images/table1.png" alt="" />
                                    </div>
                                    <lable type="text" class="table-name" aria-describedby="btnGroupAddon" >TABLE 2</lable>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-sm-12 split">
                            <button class="green_button" type="submit">New split</button>

                        </div>
                    </div>

                    <div class="row mb-3" >
                        <div class="col-md-6 col-sm-12">
                            <input type="checkbox" />
                            <span class="span_color">SPl0974564657445(Walkin Customer)</span>
                        </div>

                        <div class="col-md-6 col-sm-12 split" >
                            <button class="change_button">Change Table</button>
                            <button class="change_button">Change Customer</button>


                        </div>
                    </div>




                    <div class="row mb-3">

                        <div class="split" >
                            <button class="change_button">New order item</button>
                            <button class="red_button all">Kot Print</button>
                            <button class="red_button all">Cancel All</button>
                            <button class="change_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bill Generator</button>
                        </div>
                    </div>

                    <div class="row coid " >

                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <span class="span_color">ORDER2908908809</span>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
                            <span class="span_color">Status:
                                <a href="http:/">Open</a>
                            </span>


                        </div>
                    </div>
                    <div class="row coid mb-5" >

                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <img src="images/1.jpg" alt="" />
                            <label>Itly</label>
                            <span class="dollar">$2.0</span>

                            <button class="inprocess">Inprocess</button>

                        </div>
                        <div class="col-sm-12 col-md-2 col-lg-2 kotprint1">
                            <span >
                                <span >
                                    <input type="checkbox" />
                                    <button class="red_button">Cancel</button>
                                </span>
                            </span>


                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <img src="images/2.jpg" alt="" />
                            <label>Itly</label>
                            <span class="dollar">$2.0</span>

                            <button class="inprocess">Inprocess</button>

                        </div>
                        <div class="col-sm-12 col-md-2 col-lg-2 kotprint1">
                            <span >
                                <span >
                                    <input type="checkbox" />
                                    <button class="red_button">Cancel</button>
                                </span>
                            </span>


                        </div>
                    </div>


                </div>
                </Collapse>

                <div class="modal fade" id="exampleModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header" >
                                <h5 class="modal-title" id="exampleModalLabel">   BILL TYPES</h5>

                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Single Bill
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Auto Split Bill
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Manual Split Bill
                                    </label>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Order