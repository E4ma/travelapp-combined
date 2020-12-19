import React, { Component } from 'react';

class Signin extends Component {
  constructor({props}){
    super(props)
    this.state = { 
      signinEmail: '',
      signinPassword: ''
     }
  }
 
  onEmailChange = (event) => {
    this.setState({signinEmail:event.target.value})
  
  }

  onPasswordChange = (event)=> {
    this.setState({signinPassword:event.target.value})
  }

  // componentDidMount() {
  //   fetch('')
  //   .then(Response=> Response.json())
  //   .then();
  // }

onSubmitSignin = (event)=> {
  event.preventDefault()
  fetch('http://localhost:3000/signin', {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: this.state.signinEmail,
      password: this.state.signinPassword
    })
  })
  .then (response => response.json() )
  .then (user => {
    if (user=== 'incorrect form submission') {
      alert(user)
      this.props.onRouteChange('signin')
      
   
    }else if (user=== 'unable to log on') {
      alert(user)
      this.props.onRouteChange('signin')
      
   
    }
    else if(user.id) {
      console.log(user)
      this.props.loadUser(user)
      this.props.onRouteChange('home')
      
    }
  })
}

  render() { 
    // const {onRouteChange} = this.props
    return (
      <React.Fragment>
      <div className="loginText">
      <label htmlFor="username">EMAIL</label>
      <input type="text" id="username" onChange={this.onEmailChange} />
      <label htmlFor="password" >PASSWORD</label>
      <input type="password" id="password"  onChange={this.onPasswordChange}/>
      <input  onClick = {this.onSubmitSignin} type="submit" value="submit" className="submit" />
      {/* <div>Forgot your password</div> */}
      </div>
    </React.Fragment>
      );
  }
}
 
export default Signin;