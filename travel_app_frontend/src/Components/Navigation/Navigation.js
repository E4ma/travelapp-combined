import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import NavbarPage from '../Landing/LandingPageComponents/NavbarPage';

const styles = {
   labelText: {
      fontFamily: "Roboto",
      fontSize: "1.3rem",
      color: "#357E85",
  }
}

const Navigation = ({onRouteChange, isSignedIn}) => {
if(isSignedIn){
  return(
    <React.Fragment>
<Navbar style={styles.labelText} className="mr-auto font-weight-bold mx-5"  sticky ='top' bg="transparent" variant="primary">
<Navbar.Brand >
  <NavbarPage />
  </Navbar.Brand>
<Nav className="mr-auto"  >
<Nav.Link  onClick = {()=>onRouteChange('home')} >Home</Nav.Link>
<Nav.Link onClick = {()=>onRouteChange('learnMore')} >Learn More</Nav.Link>
<Nav.Link onClick = {()=>onRouteChange('profile')} >Profile</Nav.Link>
</Nav>
<Nav >
{/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
<Nav.Link onClick = {()=>onRouteChange('contact')}  variant="outline-info">Contact us</Nav.Link>     
</Nav>
<Button onClick = {()=>onRouteChange('signout')}  variant="outline-info">Signout</Button>
</Navbar>      
</React.Fragment>
  )
} else {
  return(
    <React.Fragment>
<Navbar style={styles.labelText}className="mr-auto font-weight-bold mx-5" sticky ='top' bg="transparent" variant="primary">
<Navbar.Brand >
  <NavbarPage />
</Navbar.Brand>
<Nav className="mr-auto"  >
<Nav.Link onClick = {()=>onRouteChange('signout')} >Home</Nav.Link>
<Nav.Link onClick = {()=>onRouteChange('learnMore')} >Learn More</Nav.Link>
{/* <Nav.Link onClick = {()=>onRouteChange('profile')} >Profile</Nav.Link> */}
</Nav>
<Nav >
{/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
<Nav.Link onClick = {()=>onRouteChange('contact')}  variant="outline-info">Contact us</Nav.Link>     
</Nav>
<Button onClick = {()=>onRouteChange('signin')}  variant="outline-info">Signin</Button>
</Navbar>      
</React.Fragment>
  )
  
}
 


  
    
};

export default Navigation;