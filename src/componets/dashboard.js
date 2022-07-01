import '../styles/dashboard.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    document.title = "POS Module | Srampos"
  },[])

  return (
    <div id="wrapper" class="order_type">

      <div class="text-end hbtn col-md-11 col-md-offset-9">
        <button type="submit" class="btn btn-default requst">Requst pill</button>
        <button type="submit" class="btn btn-default  ">logout</button>
      </div>
      <div class="bg_table_front">


        <div class="table_front">
          <div class="center_content">
            <img src={require('../assets/uploads/logos/logo8.png')}  alt="Srampos" class="sram_table_logo" />


          </div>
          <Link to="/bbq">
          <button class="location bbq" value="1" tabindex="-1">
            <img src={require('../images/bbq.png')}  />
            <p>BBQ</p>
          </button>
          </Link>
          <Link to="/dinein">
          <button class="location dine_in" value="1" tabindex="-1">
            <img  src={require('../images/dine_in.png')} />
            <p>Dine In </p>
          </button>
          </Link>
          <Link to="/menu/takeaway">
          <button class="location take_away" value="2" tabindex="-1">
            <img  src={require('../images/take_away.png')} />
            <p>Take Away </p>
          </button>
          </Link>
          <Link to="/menu/order">
          <button class="location door_delivery" value="3" tabindex="-1">
            <img  src={require('../images/delivery.png')} />
            <p>Door Delivery </p>
          </button>
          </Link>
          <Link to="/order">
          <button class="location" value="4" data-title="order_table" tabindex="-1">
            <img  src={require('../images/order.png')} />
            <p>Orders </p>
          </button>
          </Link>
          <Link to="/kitchen">
          <button class="location" value="5" tabindex="-1">
            <img  src={require('../images/kitchenpos.png')} />
            <p>Kitchen </p>
          </button>
          </Link>
          <Link to="/billing/dinein">
          <button class="location" value="6" tabindex="-1">
            <img  src={require('../images/billing.png')} />
            <p>Billing </p>
          </button>
          </Link>

        </div>
      </div>
    </div>
    
  );
}

export default Dashboard;
