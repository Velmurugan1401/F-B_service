import '../styles/dinein.css';
import Chair from "../images/chair.png"
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
                        <button type="button" class="table_id table_id_small green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 1</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                    </div>
                    <div className='col-1'>
                        <button type="button" class="table_id table_id_small green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 2</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                    </div>
                    <div className='col-1'>
                        <button type="button" class="table_id table_id_small green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 3</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h2 class="well col-xs-12 mt-4">FIRST FLOOR</h2>
                    </div>
                    <div className='col-1'>
                        <button type="button" class="table_id table_id_small green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 1</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                    </div>
                    <div className='col-1'>
                        <button type="button" class="table_id table_id_small green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 2</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                    </div>
                    <div className='col-1'>
                        <button type="button" class="table_id table_id_small green_class" value="1">
                            <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select " />

                            <p>TABLE 3</p>
                            <div class="ribbon green_ribbon"><span>Available</span></div>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div class="c1">
            <div class="pos">
                                                
              
               
                <div id="pos">
                
                	 
                    
                    <input type="hidden" id="order_type" value="1" name="order_type" />
                    
                    <div id="tables_box"><div class="tableright col-sm-12 col-xs-12">
    
            <h2 class="well col-xs-12">GROUND FLOOR</h2>
                 
                <div class="" id="table-1">
                    <button type="button" class="table_id table_id_small green_class" value="1">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>TABLE 1</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-2">
                    <button type="button" class="table_id table_id_small green_class" value="2">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>TABLE 2</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-3">
                    <button type="button" class="table_id table_id_small blue_class" value="3">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />
    
                                                    <p>TABLE 3</p>
                                                 <div class="ribbon blue_ribbon"><span>In_Kitchen</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-4">
                    <button type="button" class="table_id table_id_small green_class" value="4">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>TABLE 4</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-5">
                    <button type="button" class="table_id table_id_small blue_class" value="5">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />
                   
                                                    <p>TABLE 5</p>
                                                 <div class="ribbon blue_ribbon"><span>In_Kitchen</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-6">
                    <button type="button" class="table_id table_id_small green_class" value="6">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>TABLE 6</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-7">
                    <button type="button" class="table_id table_id_small green_class" value="7">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />
                     
                                                    <p>TABLE 7</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-8">
                    <button type="button" class="table_id table_id_small green_class" value="8">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>TABLE 8</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-28">
                    <button type="button" class="table_id table_id_small green_class" value="28">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />
                   
                                                    <p>Table 9</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-29">
                    <button type="button" class="table_id table_id_small green_class" value="29">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>Table 11</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                  
            <h2 class="well col-xs-12">First Floor</h2>
                 
                <div class="" id="table-65">
                    <button type="button" class="table_id table_id_small green_class" value="65">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>Karaoke 101</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-20">
                    <button type="button" class="table_id table_id_small green_class" value="20">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>KARAOKE 103</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                  
            <h2 class="well col-xs-12">Second Floor</h2>
                 
                <div class="" id="table-22">
                    <button type="button" class="table_id table_id_small green_class" value="22">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>Karaoke 201</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-62">
                    <button type="button" class="table_id table_id_small green_class" value="62">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>Karaoke 203</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-60">
                    <button type="button" class="table_id table_id_small green_class" value="60">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>Karaoke 205</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-59">
                    <button type="button" class="table_id table_id_small green_class" value="59">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>KARAOKE 207</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-61">
                    <button type="button" class="table_id table_id_small green_class" value="61">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>Karaoke 209</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-63">
                    <button type="button" class="table_id table_id_small green_class" value="63">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>Karaoke 211</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-64">
                    <button type="button" class="table_id table_id_small green_class" value="64">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>ROOM 211</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-57">
                    <button type="button" class="table_id table_id_small green_class" value="57">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>TABLE 26</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-58">
                    <button type="button" class="table_id table_id_small green_class" value="58">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>TABLE 27</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-56">
                    <button type="button" class="table_id table_id_small green_class" value="56">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>TABLE 28</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-55">
                    <button type="button" class="table_id table_id_small green_class" value="55">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>TABLE 29</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-54">
                    <button type="button" class="table_id table_id_small green_class" value="54">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />

                                                    <p>TABLE 31</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                    
                <div class="" id="table-53">
                    <button type="button" class="table_id table_id_small green_class" value="53">
                         <img src="http://192.168.20.4/fobyl/themes/default/admin/assets/images/table_hun.png" alt="table select" />
  
                                                    <p>tABLE 32</p>
                                                 <div class="ribbon green_ribbon"><span>Available</span></div>
                    </button>
                </div>
                  
        
  
</div></div>
                    
                    <div ></div>
                </div>
                <div ></div>
            </div>
        </div> */}
        </div>
    );
}

export default Dinein;
