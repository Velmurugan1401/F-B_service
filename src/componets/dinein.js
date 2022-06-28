import '../styles/dinein.css';
import Chair from "../images/chair.png"
import { Link } from "react-router-dom";

function Dinein() {
    return (
        <div className="Dinein mt-5">
            <div class="container-fluid">
                <div className="colom">
                    <div className="col-12">
                        <div class="mb-1">
                            <label type="text" id="disabledTextInput" class="form-control bg-light" placeholder="Disabled input">
                                GROUD FLOOR&nbsp;

                                <span className="avl">
                                    <i class="bi bi-check-circle-fill text-success"></i> Available
                                </span>
                                <span className="not-avilable">
                                    <i class="bi bi-x-square-fill text-danger"></i> Not Available</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-12">

                        <div className="row" >
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="colom mt-3 mb-2">
                    <div className="col-12">
                        <div class="mb-1">
                            <label type="text" id="disabledTextInput" class="form-control bg-light" placeholder="Disabled input">
                                FIRST FLOOR&nbsp;

                                <span className="avl">
                                    <i class="bi bi-check-circle-fill text-success"></i> Available
                                </span>
                                <span className="not-avilable">
                                    <i class="bi bi-x-square-fill text-danger"></i> Not Available</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-12">

                        <div className="row" >
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12">
                                <div class="card">
                                    <Link to="/dashboard">
                                        <div class="card-body text-center" >
                                            <img src={Chair} class="card-img-top" alt="..." />
                                            <h6 class="card-title" >Available !</h6>
                                        </div>
                                    </Link>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dinein;
