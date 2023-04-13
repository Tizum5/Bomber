import React from 'react';
import "./Homepage.css";
const Homepage = () => {
  return (
      <div className="Home">
        <div className='Home_Left'>
          <div className='container'>
          <div className='row'>
            <div className='col '>
              <img class="Back-Ground img-fluid rounded float-start d-block"  src="/assets/Bomber-Background.png" alt="Bomber-Background"/>
            </div>
          </div>
          <div className='row'>
            <div className="col">
              <img className="logo img-fluid rounded d-block" src="/assets/bolt-bomb.svg" alt="Bolt bomb" />
            </div>
          </div>
          </div>
        </div>
        <div className='Home_Right'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <h1 className='Title_Home'>Bomber</h1>
              </div>
              <div className='col Subtitle_Home'>
                <h3>Instant Adventure</h3>
              </div>
            </div>
            <div className='row SignIN_Title card'>
              <div className='col'>
                <h4>Sign In</h4>
              </div>
              <div className='SignIN_Buttons card-body'>
                <button>Google</button>
                <button>Auth</button>
                <button>Apple</button>
                <button>Phone</button>
                <button>Email</button>
              </div>
            </div>
            <div className='row'>
              {/*put in a moudal*/}
              <div className='col Sign_UpTitle'>
                <h5>Sign Up</h5>
              </div>
              <div className='col SignUp_Buttons'>
                <button>Google</button>
                <button>Auth</button>
                <button>Apple</button>
                <button>Phone</button>
                <button>Email</button>
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
};

export default Homepage;
