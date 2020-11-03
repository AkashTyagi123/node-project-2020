import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import LoginForm from './LoginForm/LoginForm';
import AppealingText from '../Home/AppealingText/AppealingText';
import loginImage from '../../images/loginImage.webp';
const login = ()=>{
   return(
       <Container className="mb-5">
           <Row>
               <Col lg="8" md="8" sm="6">
                <AppealingText imgSrc={loginImage}/>
               </Col>
               <Col lg="4" md="4" sm="6">
                <LoginForm />
               </Col>
           </Row>
       </Container>
   );
}
export default login;