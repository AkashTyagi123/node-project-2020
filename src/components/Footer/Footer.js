import React from 'react';
import {Container,Row,Col} from 'reactstrap';

const footer = ()=>{
    const style={
        width:"100vw",
        
        backgroundColor:"#141c3a",
        paddingTop:"2%",
        color:"#fff"

    }
   return(
       <div style={style}>
          <Container>
            <Row>
                <Col lg="4" md="4" sm="12" xs="12">
                <br></br>
                   <span className="logo">KIDCODER</span>
                   <br></br>
                </Col>
                <Col lg="4" md="4" sm="6" xs="6">
                <ul className="" style={{listStyle:"none"}}>
              <li style={{margin:"2%"}}><a className="footer-link" href="/team">Our Team</a></li>
              <li style={{margin:"2%"}}><a className="footer-link" href="/">Sign Up</a></li>
              <li style={{margin:"2%"}}><a className="footer-link" href="/login">Login</a></li>
          </ul>
                </Col>
                <Col lg="4" md="4" sm="12" xs="6">
                <ul className="" style={{listStyle:"none"}}>
              <li style={{margin:"2%"}}><a className="footer-link" href="/">Home</a></li>
              <li style={{margin:"2%"}}><a className="footer-link" href="/cataloge">Catalog</a></li>
              <li style={{margin:"2%"}}><a className="footer-link" href="/connect">Connect</a></li>
          </ul>
                </Col>
            </Row>
            
          </Container>
       </div>
   );
}
export default footer;