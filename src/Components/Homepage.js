import React from 'react';
import "./Homepage.css";
import {PhoneNumberInput} from "./PhoneNumberInput.js";
import CountryCodesDropdown from './CountryCodes';
import 'bootstrap/dist/css/bootstrap.min.css';
import DOBDatePicker from "./DOBDatePicker";



const Homepage = () => {
  return (
      <div className="Home">
        <div className='Home_Left'>
          <div className='container'>
          <div className='row'>
            <div className='col '>{/*background img */}
              <img className="Back-Ground img-fluid rounded float-start d-block"  src="/assets/Bomber-Background.png" alt="Bomber-Background"/>
            </div>
          </div>
          <div className='row'>
            <div className="col"> {/*logo */}
              <img className="logo img-fluid rounded" src="/assets/bolt-bomb.svg" alt="Bolt bomb" />
            </div>
          </div>
          </div>
        </div>
        <div className='Home_Right'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <h1 className='Title_Home mx-5'>Bomber</h1>
              </div>
              <div className='col Subtitle_Home mx-3'>
                <h3>Instant Adventure</h3>
              </div>
            </div>
            <div className='row SignIN_Title mb-3 card sticky text-bg-secondary border-dark'>
              <div className='col card-header border-transparent border-dark'>
                <h3 className="card-title text-center text-primary text-center fw-bolder rounded text-decoration-underline bg-dark text-capitalize">Sign In</h3>
              </div>
              <div className='SignIN_Buttons px-5 card-body gap-2'>
                <button type="button" href="#" className="mx-1 my-1 btn btn-success btn-outline-warning text-primary">Google</button>
                <button type="button" href="#" className="my-1 mx-1 btn btn-danger btn-outline-dark text-light">Auth</button>
                <button type="button" href="#" className="my-1 mx-1 btn btn-secondary btn-outline-dark">Apple</button>
                {/*modal for password and username input for Email and phone buttons */}
                <button type="button" href="#" className="my-1 mx-1 btn btn-primary btn-outline-info text-warning">Phone</button>
                <button type="button" href="#" className="my-1 mx-1 text-secondary btn btn-warning btn-outline-danger">Email</button>
              </div>
            </div>
            <div className='row'>
              <div className="col ">
                <button type="button " className="sign-Up-Button btn btn-info" data-bs-toggle="modal" data-bs-target="#sign-up">
                  Sign Up
                </button>
                <div className="modal fade" id= "sign-up" tabIndex="-1" aria-labelledby="sign-up" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="sign-up">...JOIN US</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                      </div>
                      <div className="modal-body">
                        <div className='SignIN_Buttons px-5 card-body gap-2'>
                          <button type="button" href="#" className="mx-1 my-1 btn btn-success btn-outline-warning text-primary">Google</button>
                          <button type="button" href="#" className="my-1 mx-1 btn btn-danger btn-outline-dark text-light">Auth</button>
                          <button type="button" href="#" className="my-1 mx-1 btn btn-secondary btn-outline-dark">Apple</button>
                        </div>
                        <form>
                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                          </div>
                          <div className="mb-3">
                            <div className="row g-3 align-items-center">
                              <div className="col-auto">
                                <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                              </div>
                              <div className="col-auto">
                                <input type="password" id="inputPassword6" className="form-control" aria-labelledby="passwordHelpInline"/>
                              </div>
                              <div className="col-auto">
                                <span id="passwordHelpInline" className="form-text">
                                  Must be 8-20 characters long.
                                </span>
                              </div>
                            </div>
                          </div>
                          <div div>
                            <div className="mb-3">
                              <div className="input-group">
                                <span className="input-group-text">First and last name</span>
                                <input type="text" aria-label="First name" className="form-control"/>
                                <input type="text" aria-label="Last name" className="form-control"/>
                              </div>
                            </div> {/*fix drop down */}
                            <div className="dropdown mb-3">
                              <CountryCodesDropdown/>
                            </div>
                            <div className="mb-3">
                              <h6>Phone Number</h6>
                              <PhoneNumberInput/>
                            </div>
                              <DOBDatePicker />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className='Footer container-fluid'>
          <div className='row'>
            <div className='col'>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Homepage;
