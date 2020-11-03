import React,{useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,

  Nav,
  NavItem,
  NavLink,
  Button,
  NavbarText,
  NavbarBrand
} from 'reactstrap';
import {useStateValue} from '../StateProvider/StateProvider';
function AppNavbar() {

 const [isOpen,setIsOpen] = useState(true);
 const [{user},dispatch] = useStateValue();
 const loginStyle={
  margin:"10px",
  backgroundColor: "transparent",
  border:"none",
  color:"#141c3a",
  fontWeight:"bold"
}


const signupStyle={
  margin:"10px",
  backgroundColor: "rgba(3, 168, 124, 1)",
  
  color:"fff",
  
}
 const logoutHandler = () =>{
   dispatch({
     type:"LOGOUT_USER"
   })
 }

  return (
    <Navbar dark expand="md">
        <NavbarBrand className="nav-link" style={{borderTop:"1px solid #141c3a",borderBottom:"1px solid #141c3a"}}>KIDCODER</NavbarBrand>
        <NavbarToggler style={{color:"#000"}} onClick={()=>setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              
            <NavItem >
              <NavLink className="nav-link" href="/cataloge">Catalogue</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/connect">Connect with us</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            {user ? null :<Button href="/login" style={loginStyle}>Login</Button> }
            
              
          </NavbarText>
          <NavbarText>
            { user? <Button onClick={logoutHandler} style={signupStyle}>Logout</Button>:
              <Button href="/" style={signupStyle}>Signup</Button>}
          </NavbarText>
        </Collapse>
      </Navbar>
  )

  }
export default AppNavbar
