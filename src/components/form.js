import React from 'react';
import { useState, useEffect } from 'react';
import './styles/form.css';
import uparrow from './assets/baseline_arrow_circle_up_white_36dp.png';
import downarrow from './assets/baseline_arrow_circle_down_white_36dp.png'
import logo from './assets/Incubator.png';
import 'antd/dist/antd.css';
import { Select } from 'antd';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// const count = (str) => {
//     var lng = str.length;
// 	document.getElementById("charcount").innerHTML = lng + ' out of 400 characters';
// }



const { Option } = Select;

const Form = () => {
    var [count, setCount] = useState(1200);
    useEffect(() => {

        document.getElementById('charcount').innerHTML = `${count}`;
    });

    return (
        <div className='container'>
            <div className='card'>
                <div className='left'>
                    <div className='arrow'>
                        <img src={uparrow} className='uparrow' />
                        <img src={downarrow} className='downarrow' />
                    </div>
                </div>
                <div className='right'>
                    <div className='top-part'>
                        <h2>About Startup</h2>
                        <img src={logo} />
                    </div>
                    <form>
                        <label>STARTUP NAME*</label>
                        <input type='text'></input>
                        <div className='section1'>
                            <div className='industry'>
                                <label>INDUSTRY*</label>
                                <Select style={{ width: '25vw' }}>
                                    <Option value='market'>Marketing</Option>
                                    <Option value='ai'>AI</Option>
                                    <Option value='aad'>Aeronautics Aerospace & Defence</Option>
                                    <Option value='analytic'>Analytics</Option>
                                    <Option value='anim'>Animation</Option>
                                    <Option value='ar'>AR & VR (Augmented + Virtual Reality)</Option>
                                </Select>
                            </div>
                            <div className='industry'>
                                <label>SECTOR*</label>
                                <Select style={{ width: '25vw' }}>
                                    <Option value='datascience'>Data Science</Option>
                                    <Option value='bigdata'>Big Data</Option>
                                    <Option value='bi'>Business Intelligence</Option>
                                    <Option value='others'>Others</Option>
                                </Select>
                            </div>
                        </div>
                        <div className='section2'>
                            <div className='left-sec2'>
                                <label>STAGE*</label>
                                <div className='stage-inp'>
                                    <input type='radio' name='stage' id='ideation'></input>
                                    <label for='ideation'>Ideation</label>
                                    <input type='radio' name='stage' id='validate'></input>
                                    <label for='validate'>Validation</label>
                                    <input type='radio' name='stage' id='earlyt'></input>
                                    <label for='earlyt'>Early</label>
                                    <input type='radio' name='stage' id='scale'></input>
                                    <label for='scale'>Scaling</label>
                                </div>
                                <div className='interests'>
                                    <label>interests*</label>
                                    <div>
                                        <input type='checkbox' name='vehicle1' style={{width:"30px"}}></input>
                                        <label>All</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" style={{width:"30px"}} />
                                        <label>Incubation</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" style={{width:"30px"}} />
                                        <label>Acceleration</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" style={{width:"30px"}} />
                                        <label>Investment</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" style={{width:"30px"}} />
                                        <label>Mentoring</label>
                                    </div>
                                    <label className='logohead'>logo</label>
                                    <div className='logo'>
                                        <h1>+</h1>
                                    </div>
                                </div>
                                
                                {/* <div className='toggle'>
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span className="slider round">Bootstraped</span>
                                    </label>
                                </div> */}
                            </div>
                            <div className='right-sec2'>
                                <div className='aboutstartup'>
                                    <label>About startup*</label>
                                    <textarea onKeyUp={() => { setCount(count - 1) }}></textarea>
                                    <span id='charcount'></span>
                                </div>
                                <button>Continue ></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Form;