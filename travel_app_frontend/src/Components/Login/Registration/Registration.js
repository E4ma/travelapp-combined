import React, { Component } from 'react';

class Registration extends Component {
  constructor({props}){
    super(props)
    this.state = { 
      signinName: '',
      signinEmail: '',
      signinPassword: '',
      signinPassword2: ''
     }
  }
  onNameChange = (event) => {
    this.setState({signinName:event.target.value})
  
  }


  onPasswordChange2 = (event)=> {
    this.setState({signinPassword2:event.target.value})
  }
 
  onEmailChange = (event) => {
    this.setState({signinEmail:event.target.value})
  
  }

  onPasswordChange = (event)=> {
    this.setState({signinPassword:event.target.value})
  }


  onSubmitSignin = (event)=> {
    event.preventDefault()
    fetch('http://localhost:3000/register', {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: this.state.signinName,
      email: this.state.signinEmail,
      password: this.state.signinPassword
    })
  })
  .then (response => response.json() )
  .then (user => {
    if (user=== 'incorrect form submission') {
      alert(user)
      this.props.onRouteChange('signin')      
    }else if(user.id) {
      this.props.loadUser(user)
      this.props.onRouteChange('home')
    }
  })
    
  }
  render() { 
    return (       
    <React.Fragment>
      <div className="loginText">
        <label htmlFor="fullname">full name</label>
        <input type="text" id="fullname"  onChange = {this.onNameChange }/>
        <label htmlFor="email">email</label>
        <input type="text" id="email" onChange = {this.onEmailChange}/>
        <label htmlFor="password" >password</label>
        <input type="password" id="password" onChange = {this.onPasswordChange}/>
        <label htmlFor="confirmpassword">confirm password</label>
        <input type="password" id="confirmpassword" />
        <input onClick = {this.onSubmitSignin} type="submit" value="submit" className="submit" />
        </div>
      </React.Fragment>
       );
  }
}
 
export default Registration;