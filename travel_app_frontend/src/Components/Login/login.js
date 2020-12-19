import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
import Registration from "./Registration/Registration"
import Signin from "./Signin/Signin"



// class Login extends Component {
function Login({onRouteChange, loadUser}) {
    // state = {  }
//   render() 
    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const loginProps = useSpring({ 
      left: registrationFormStatus ? -500 : 0, // Login form sliding positions
    });
    const registerProps = useSpring({
      left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
    });
  
    const loginBtnProps = useSpring({
      borderBottom: registrationFormStatus 
        ? "solid 0px transparent"
        : "solid 2px #357e85",  //Animate bottom border of login button
    });
    const registerBtnProps = useSpring({
      borderBottom: registrationFormStatus
        ? "solid 2px #357e85"
        : "solid 0px transparent", //Animate bottom border of register button
    });
  
    function registerClicked() {
      setRegistartionFormStatus(true);
    }
    function loginClicked() {
      setRegistartionFormStatus(false);
    }
  
    return (
      <React.Fragment>
      <div className="container-login">
      <div className="login-register-wrapper">
        <div className="nav-buttons center ">
          
          <animated.button
            onClick={loginClicked}
            id="loginBtn"
            style={loginBtnProps}
          >
            Login
          </animated.button>
          
         
          <animated.button
          className='signinbtn'
            onClick={registerClicked}
            id="registerBtn"
            style={registerBtnProps}
          >
            Register
          </animated.button>
        
        </div>
        <div className="form-group">
          <animated.form action="" id="loginform" style={loginProps}>
            <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
          </animated.form>
          <animated.form action="" id="registerform" style={registerProps}>
            <Registration loadUser={loadUser} onRouteChange={onRouteChange} />
          </animated.form>
        </div>
        {/* <animated.div className="forgot-panel" style={loginProps}>
          
        </animated.div> */}
      </div>
      
      </div>
      </React.Fragment>
    );
//   };
}
  export default Login;