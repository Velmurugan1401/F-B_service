import '../styles/dashboard.css';
import BBQ from "../images/3.png"
import Din from "../images/1.png"
import Takeaway from "../images/8.png"
import doordelivery from "../images/5.png"
import orderr from "../images/4.png"
import Hitchen from "../images/7.png"
import Billings from "../images/6.png"
import Repotss from "../images/Report.png"
import { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"


function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wrapper" class="order_type">

      <div class="text-end hbtn col-md-11 col-md-offset-9">
        <button type="submit" class="btn btn-default requst">Requst pill</button>
        <button type="submit" class="btn btn-default  ">logout</button>
      </div>
      <div class="bg_table_front">


        <div class="table_front">
          <div class="center_content">
            <img src="http://192.168.20.4/fobyl/assets/uploads/logos/logo8.png" alt="Srampos" class="sram_table_logo" />


          </div>

          <button class="location bbq" value="1" tabindex="-1">
            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/bbq.png" />
            <p>BBQ</p>
          </button>


          <button class="location dine_in" value="1" tabindex="-1">
            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/dine_in.png" />
            <p>Dine In </p>
          </button>

          <button class="location take_away" value="2" tabindex="-1">
            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/take_away.png" />
            <p>Take Away </p>
          </button>
          <button class="location door_delivery" value="3" tabindex="-1">
            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/delivery.png" />
            <p>Door Delivery </p>
          </button>
          <button class="location" value="4" data-title="order_table" tabindex="-1">
            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/order.png" />
            <p>Orders </p>
          </button>
          <button class="location" value="5" tabindex="-1">
            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/kitchenpos.png" />
            <p>Kitchen </p>
          </button>
          <button class="location" value="6" tabindex="-1">
            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/billing.png" />
            <p>Billing </p>
          </button>

        </div>
      </div>
    </div>
    //   <div className="Dasnboad mt-5">
    //       <div className="container">
    //           <div className="row">
    //               <div className="col-lg-2 cursore-point" role="button" onClick={handleShow}>
    //                   <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
    //                       <div class="card-body">
    //                           <div align="center">
    //                               <img src={BBQ} alt="" />
    //                           </div>
    //                           <h6 class="card-title mt-4">BBQ</h6>
    //                       </div>
    //                   </div>
    //               </div>
    //               <div className="col-lg-2 ">
    //                   <Link to="dinein">
    //                   <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
    //                       <div class="card-body">
    //                           <div align="center">
    //                               <img src={Din} alt="" />
    //                           </div>
    //                           <h6 class="card-title mt-4">Dine In</h6>
    //                       </div>
    //                   </div>
    //                   </Link>

    //               </div>
    //               <div className="col-lg-2 ">
    //                   <Link to="menu">
    //                   <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
    //                       <div class="card-body">
    //                           <div align="center">
    //                               <img src={Takeaway} alt="" />
    //                           </div>
    //                           <h6 class="card-title mt-4">Take Away</h6>
    //                       </div>
    //                   </div>
    //                   </Link>
    //               </div>
    //               <div className="col-lg-2 ">
    //                   <div class="card cardshadow" role="button" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
    //                       <div class="card-body">
    //                           <div align="center">
    //                               <img src={doordelivery} alt="" />
    //                           </div>
    //                           <h6 class="card-title mt-4">Door Delivery</h6>
    //                       </div>
    //                   </div>
    //               </div>
    //               <div className="col-lg-2 ">
    //                   <Link to="order">
    //                   <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
    //                       <div class="card-body">
    //                           <div align="center">
    //                               <img src={orderr} alt="" />
    //                           </div>
    //                           <h6 class="card-title mt-4">Order</h6>
    //                       </div>
    //                   </div>
    //                   </Link>
    //               </div>
    //               <div className="col-lg-2 ">
    //                   <Link to="kitchen">
    //                   <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
    //                       <div class="card-body">
    //                           <div align="center">
    //                               <img src={Hitchen} alt="" />
    //                           </div>
    //                           <h6 class="card-title mt-4">Kitchen</h6>
    //                       </div>
    //                   </div>
    //                   </Link>
    //               </div>
    //               <div className="col-lg-2 mt-4">
    //                   <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
    //                       <div class="card-body">
    //                           <div align="center">
    //                               <img src={Billings} alt="" />
    //                           </div>
    //                           <h6 class="card-title mt-4">Billing</h6>
    //                       </div>
    //                   </div>
    //               </div>
    //               <div className="col-lg-2 mt-4">
    //                   <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
    //                       <div class="card-body">
    //                           <div align="center">
    //                               <img src={Repotss} alt="" />
    //                           </div>
    //                           <h6 class="card-title mt-4">Reports</h6>
    //                       </div>
    //                   </div>
    //               </div>


    //           </div>

    //       </div>
    //       <Modal show={show} onHide={handleClose} animation={false}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Add Customer</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //   <div class="">


    //                 <form class="row g-1">


    //                   <div class="col-md-12">


    //                     <label for="inputEmail4" class="form-label "><span className='text-danger'>*</span>&nbsp;Name</label>


    //                     <input type="text" class="form-control" id="inputEmail4" />


    //                   </div>
    //                   <div class="col-md-12">


    //                     <label for="inputPassword4" class="form-label"><span className='text-danger' >*</span>&nbsp;Phone</label>


    //                     <input type="number" class="form-control" id="inputPassword4" />


    //                   </div>



    //                   <div class="col-md-6">


    //                     <label for="inputState" class="form-label"><span className='text-danger' >*</span>&nbsp;Customer</label>


    //                     <select id="inputState" class="form-select">


    //                       <option selected="">Choose...</option>


    //                       <option>Regular</option>
    //                       <option>Regular</option>



    //                     </select>


    //                   </div>

    //                   <div class="col-md-6">


    //                     <label for="inputState" class="form-label"><span className='text-danger' >*</span>&nbsp;Customer Type</label>


    //                     <select id="inputState" class="form-select">


    //                       <option selected="">Choose...</option>


    //                       <option>...</option>


    //                     </select>


    //                   </div>

    //                   <div class="col-md-4">


    //                       <label for="inputState" class="form-label">Adults</label>


    //                       <select id="inputState" class="form-select">


    //                         <option selected="">Choose...</option>


    //                         <option>...</option>


    //                       </select>


    //                     </div>


    //                   <div class="col-md-4">


    //                     <label for="inputState" class="form-label">Childs</label>


    //                     <select id="inputState" class="form-select">


    //                       <option selected="">Choose...</option>


    //                       <option>...</option>


    //                     </select>


    //                   </div>

    //                   <div class="col-md-4">


    //                       <label for="inputState" class="form-label">Kids</label>


    //                       <select id="inputState" class="form-select">


    //                         <option selected="">Choose...</option>


    //                         <option>...</option>


    //                       </select>


    //                     </div>
    //                     <div class="col-md-4">
    //                       <label for="inputEmail4" class="form-label">Price</label>


    //                       <input type="text" class="form-control" id="inputEmail4" />


    //                     </div>
    //                     <div class="col-md-4">
    //                       <label for="inputEmail4" class="form-label">Price</label>


    //                       <input type="text" class="form-control" id="inputEmail4" />


    //                     </div>
    //                     <div class="col-md-4">
    //                       <label for="inputEmail4" class="form-label">Price</label>


    //                       <input type="text" class="form-control" id="inputEmail4" />


    //                     </div>



    //                 </form>

    //         </div>

    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={handleClose}>
    //       Close
    //     </Button>
    //     <Button variant="primary" onClick={handleClose}>
    //       Save Changes
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
    //   </div>
  );
}

export default Dashboard;
