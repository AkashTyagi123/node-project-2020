import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import SignUpForm from '../../Signup/SignupForm/SignupForm';
import AppealingText from '../AppealingText/AppealingText';
import spaceman from '../../../images/test.webp';
const topConatiner = ()=>{
   return(
       <Container className="pb-5">
           <Row>
               <Col lg="8" md="8" sm="12">
                <AppealingText imgSrc={spaceman}/>
               </Col>
               <Col lg="4" md="4" sm="12">
                <SignUpForm />
               </Col>
           </Row>
       </Container>
   );
}
export default topConatiner;