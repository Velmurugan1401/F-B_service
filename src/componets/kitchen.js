import '../styles/kitchen.css';
import Collapse from "react-bootstrap/Collapse"
import { useState } from 'react';
import Cloche from "../images/cloche.png"
import secount from "../images/2.jpg"
import one from "../images/1.jpg"


function Kitchen() {
  const [show , setShow] = useState(true)
  const showmodal = ()=>{
    setShow(!show)
  }
  const closemodal = ()=>{
    setShow(false)
  }
  return (
    <div className="Kitchen mt-5">

      <div class="container">
        <div class="row"  >

          <div class="col-sm-12 col-md-4 col-lg-4" >
            <a href="javascript:void(0)" onClick={showmodal} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >

              <button class=" button1" type="submit">  SUKI AREA</button>
            </a>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4" >
            <a href="javascript:void(0)" onClick={showmodal}  data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >

              <button class=" button1" type="submit">  CHEF AREA</button>
            </a>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4" >
            <a href="javascript:void(0)" onClick={showmodal}  data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >

              <button class=" button1" type="submit">BEER  BAR AREA</button>
            </a>
          </div>
        </div>

        <Collapse in={show}>
        <div class="collapse" id="collapseExample" >

          <div class="row mt-4" >
            <div class="col-md-6 col-sm-12 p-0" >
              <div class="dineintitle">
                <div class="input-group">
                  <div class="input-group-text" id="btnGroupAddon">
                    <img className='himage' src={Cloche} alt="" />
                  </div>
                  <lable type="text" class="dinein_lable" aria-describedby="btnGroupAddon">FADF89405986HD66B</lable>
                  <div class="tableno">
                    <a href="dinein_table.html">
                      <button class="table_button">Table1</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 kotprint" >
              <button class="red_button print" type="submit">Kot Print</button>
            </div>
          </div>
          <div class="row cstyle" >

            <div class="col-sm-12 col-md-6 col-lg-6">
              <input type="checkbox" />
              <span class="span_color pl-2">Superadmin</span>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
              <span class="span_color">Status:
                <a href="javascript:void(0)" className='status'>Open</a>
              </span>
              <button class="table_button">Print</button>


            </div>
          </div>
          <div class="row cstyle" >

            <div class="col-sm-12 col-md-4 col-lg-4">
              <img src={one} alt="" />
              <label>Itly</label>
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
            <div class="col-sm-12 col-md-4 col-lg-4">
              <img src={secount} alt=""  />
              <label>Itly</label>
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
          <div class="row mt-5" >
            <div class="col-md-6 col-sm-12 p-0" >
              <div class="dineintitle">
                <div class="input-group">
                  <div class="input-group-text" id="btnGroupAddon">
                    <img className='himage' src={Cloche} alt=""  />
                  </div>
                  <lable type="text" class="dinein_lable" aria-describedby="btnGroupAddon" >FADF89405986HD66B</lable>
                  <div class="tableno">
                    <a href="dinein_table.html">
                      <button class="table_button">Table2</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 kotprint" >
              <button class="red_button print" type="submit">Kot Print</button>
            </div>
          </div>

          <div class="row cstyle" >

            <div class="col-sm-12 col-md-6 col-lg-6">
              <input type="checkbox" />
              <span class="span_color">Superadmin</span>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
              <span class="span_color">Status:
                <a href="http:/" className='status'>Open</a>
              </span>
              <button class="table_button">Print</button>


            </div>
          </div>
          <div class="row cstyle" >

            <div class="col-sm-12 col-md-4 col-lg-4">
              <img src = {one} alt=""  />
              <label>Itly</label>
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
            <div class="col-sm-12 col-md-4 col-lg-4">
              <img src={secount} alt=""  />
              <label>Itly</label>
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

          <div class="row cstyle" >

            <div class="col-sm-12 col-md-4 col-lg-4">
              <img src={one} alt=""  />
              <label>Itly</label>
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
            <div class="col-sm-12 col-md-4 col-lg-4">
              <img  src={secount} alt="" style={{width: "50px"}} /> 
              <label>Itly</label>
              <button class="inprocess">Inprocess</button>

            </div>
            <div class="col-sm-12 col-md-2 col-lg-2 kotprint1">
              <span >
                <span >
                  <input type="checkbox" ></input>
                  <button class="red_button">Cancel</button>
                </span>
              </span>


            </div>
          </div>
        </div>
        </Collapse>

      </div >
    </div >
  );
}

export default Kitchen;
