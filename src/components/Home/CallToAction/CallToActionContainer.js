import React from 'react';

import {Row,Col,Container} from 'reactstrap';
import back from '../../../images/back.svg';
import sky from '../../../images/sky.webp';
import lbd from '../../../images/learnbydoing.png';
import pltp from '../../../images/putlearningtopractice.webp';

const CallToActionContainer = ()=>{
const style = {
    height:"auto",
    width:"100vw",
    backgroundColor:"#141c3a",
    backgroundImage:`url(${back})`,
    paddingTop:"5%",
    color:"#fff"
}
const imgStyle={
    maxWidth:"100%"
}
return(
    <div style={style}>
        <Container>
            <h1 className="text-center">Be a part of workforce that design future</h1>
            <Row style={{marginTop:"10%"}}>
                <Col lg="4" md="4" sm="12">
                    <img alt="" style={imgStyle} src={lbd}/>
                    <h5 style={{marginTop:"10%"}}>Learn By Doing</h5>
                    <p>No matter your experience level, you'll be writing real, working code in minutes.</p>
                </Col>
                <Col lg="4" md="4" sm="12">
                <img alt="" style={imgStyle} src={pltp} />
                <h5 style={{marginTop:"10%"}}>Put Learning to Practice</h5>
                <p>Apply your learning with real-world projects and test your knowledge with tailor-made quizzes.</p>
                </Col>
                <Col lg="4" md="4" sm="12">
                <img alt="" style={imgStyle} src={sky}/>
                <h5 style={{marginTop:"20%"}}>Sky rocket to your career</h5>
                <p>Coding skills have never been more in-demand. Learn everything you need to take your career to the next level</p>
                </Col>
            </Row>
        </Container>
    </div>
);

}
export default CallToActionContainer;