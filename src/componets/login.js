import '../styles/login.css';
import { Link } from "react-router-dom";
import {useEffect, useState} from "react"

function Login() {
    const [cdata , setcdata] = useState(new Date().getFullYear()+"/0"+(new Date().getMonth()+1)+"/"+new Date().getDate())
    useEffect(()=>{
        document.title = "POS Login Srampos"
    },[])
    return (
        <div className='main '>
            <div class="container login">
                <div class="row h-100">
                    <div class="col-md-7 col-sm-12 ">
                    </div>
                    <div class="col-md-5 col-sm-12 image2" >
                        <h1>Enter Your Password</h1>
                        <div className='text-end'><button class="btn btn-success btn-sm pull-right">{cdata}</button></div>
                        <form>
                            <div class="form-group"> <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Password" />
                            </div>
                            <div class="form-group mt-4">
                                <select className="form-select form-control selectbox " aria-label="Default select example">
                                    <option selected>Select Group</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select> </div>
                            <div class="form-group mt-4">
                                <select className="form-select form-control selectbox " aria-label="Default select example">
                                    <option selected>Select Group</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select></div>
                            <div className='from-group mt-4'>
                                <button type="reset" class="btn  btn-danger pull-left"> Reset &nbsp; <i class="fa fa-sign-in"></i></button>
                                <Link to="/dashboard"><button type="submit" class="btn btn-success  pull-right"> Login &nbsp; <i class="fa fa-sign-in"></i></button></Link>

                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
