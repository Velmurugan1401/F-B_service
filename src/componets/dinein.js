import '../styles/dinein.css';
import { Link } from "react-router-dom";

function Dinein() {
    return (
        <div id="content ">
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-12'>
                        <h2 class="well col-xs-12 mt-4">GROUND FLOOR</h2>
                    </div>
                    <div className='col-1'>
                        <Link to={{
                            pathname: "/menu/dinein?table=1",
                            state: { Table: 1 }
                        }}>
                            <button type="button" class="table_id table_id_small green_class" value="1">
                                <img  src={require('../images/table_hun.png')} alt="table select " />

                                <p>TABLE 1</p>
                                <div class="ribbon green_ribbon"><span>Available</span></div>
                            </button>
                        </Link>
                    </div>
                    <div className='col-1'>
                    <Link to={{
                            pathname: "/menu/dinein?table=2",
                            state: { Table: 2 }
                        }}>
                            <button type="button" class="table_id table_id_small green_class" value="1">
                                <img  src={require('../images/table_hun.png')} alt="table select " />

                                <p>TABLE 2</p>
                                <div class="ribbon green_ribbon"><span>Available</span></div>
                            </button>
                        </Link>
                    </div>
                    <div className='col-1'>
                    <Link to={{
                            pathname: "/menu/dinein?table=3",
                            state: { Table: 3 }
                        }}>
                            <button type="button" class="table_id table_id_small green_class" value="1">
                                <img  src={require('../images/table_hun.png')} alt="table select " />

                                <p>TABLE 3</p>
                                <div class="ribbon green_ribbon"><span>Available</span></div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h2 class="well col-xs-12 mt-4">FIRST FLOOR</h2>
                    </div>
                    <div className='col-1'>
                    <Link to={{
                            pathname: "/menu/dinein?table=1",
                            state: { Table: 1 }
                        }}>
                            <button type="button" class="table_id table_id_small green_class" value="1">
                                <img  src={require('../images/table_hun.png')} alt="table select " />

                                <p>TABLE 1</p>
                                <div class="ribbon green_ribbon"><span>Available</span></div>
                            </button>
                        </Link>
                    </div>
                    <div className='col-1'>
                    <Link to={{
                            pathname: "/menu/dinein?table=2",
                            state: { Table: 2 }
                        }}>
                            <button type="button" class="table_id table_id_small green_class" value="1">
                                <img  src={require('../images/table_hun.png')} alt="table select " />

                                <p>TABLE 2</p>
                                <div class="ribbon green_ribbon"><span>Available</span></div>
                            </button>
                        </Link>
                    </div>
                    <div className='col-1'>
                    <Link to={{
                            pathname: "/menu/dinein?table=3",
                            state: { Table: 3 }
                        }}>
                            <button type="button" class="table_id table_id_small green_class" value="1">
                                <img  src={require('../images/table_hun.png')} alt="table select " />

                                <p>TABLE 3</p>
                                <div class="ribbon green_ribbon"><span>Available</span></div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dinein;
