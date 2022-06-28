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
          <Link to="/dinein">
          <button class="location bbq" value="1" tabindex="-1">
            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/bbq.png" />
            <p>BBQ</p>
          </button>
          </Link>
          <Link to="/dinein">
          <button class="location dine_in" value="1" tabindex="-1">
            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/dine_in.png" />
            <p>Dine In </p>
          </button>
          </Link>

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
    
  );
}

export default Dashboard;
