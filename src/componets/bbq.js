import '../styles/bbq.css';
import { Link } from "react-router-dom";

function Bbq() {
    return (
        <div id="content ">
            <div className='container-fluid '>
            <div className='row'>
                    <div className='col-12'>
                        <h2 class="well col-xs-12 mt-4">GROUND FLOOR</h2>
                    </div>
                    <div className='col-2'>
                        <Link to="/menu/bbq">
                        <button type="button" class="table_id table_id_small bbq_table green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 1 BBQ</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                        </Link>
                    </div>
                    <div className='col-2'>
                    <Link to="/menu/bbq">
                        <button type="button" class="table_id table_id_small bbq_table green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 2 BBQ</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                        </Link>
                    </div>
                    <div className='col-2'>
                        <Link to="/menu/bbq">
                        <button type="button" class="table_id table_id_small bbq_table green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 3 BBQ</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h2 class="well col-xs-12 mt-4">FIRSH FLOOR</h2>
                    </div>
                    <div className='col-2'>
                        <button type="button" class="table_id table_id_small bbq_table green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 1 BBQ</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                    </div>
                    <div className='col-2'>
                        <button type="button" class="table_id table_id_small bbq_table green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 2 BBQ</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                    </div>
                    <div className='col-2'>
                        <button type="button" class="table_id table_id_small bbq_table green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 3 BBQ</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Bbq;
