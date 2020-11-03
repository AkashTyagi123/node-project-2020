import React from 'react';
import {Container,Row,Col,Button} from 'reactstrap';
import Code from '../../../images/code.svg';

const ThirdContainer =() =>{
    const style={
        height:"auto",
        width:"100vw",
        backgroundColor:"#f1f3fe",
        color:"#141c3a",
        paddingTop:"7%",
        lineHeight:"2"
    }
    return(
      <div className="pb-5" style={style}>
        <Container>
            <Row>
                <Col lg="5">
                 <h3 className="text-center">An Integrated Editor to reinforce your learning</h3>
                 <hr></hr>
                 
                 <p style={{fontSize:"20px"}}>One of the most important things in learning new concepts is practice and repetition.
                    Repetition helps to improve speed, increases confidence, and strengthens the connections in the brain that help memory and performance.
                    Ultimately, this means a better interview performance for you and this is what we are training for. Great interview outcomes, everytime.
                    Each of our content items with code comes with a practice code editor where you can write your solution and run it against pre-defined test cases.</p>
                    <Button block style={{color:"#141c3a",
    border:"1px solid #141c3a",
    background: "transparent"}} href="/cataloge" className="try-btn">Try It Now</Button>
                </Col>
                <Col>
                <br></br>
                  <img alt="" className="code-img" src={Code}/>
                </Col>
            </Row>
        </Container>
      </div>
    );
}
export default ThirdContainer;