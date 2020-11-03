import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input,FormText,Alert} from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import { useStateValue } from '../../StateProvider/StateProvider';
function LoginForm() {
    const [{user},dispatch] = useStateValue();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loginError,setLoginError] = useState("");
    const history = useHistory();
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/user/login",{
            email,
            password
        })
        .then(res=>{
            console.log(res);
            if(!res.data.isSuccess){
                setLoginError(res.data.msg);
                setTimeout(()=>{
                    setLoginError("");
                },4000);
            }
            else{
                console.log(res.data.id);
                localStorage.setItem("token",res.data.token);
                dispatch({type:'SET_USER',
                    user:res.data.token
                })
                
                history.push(res.data.redirect);
               
                
            }
        })
        .catch(err=>console.log(err));
    }
    const loginStyle={
        
        backgroundColor: "rgba(3, 168, 124, 1)",
        
        color:"fff",
        
    }
    const impLink ={
       color:"rgba(3, 168, 124, 1)" 
    }
    return (
        <React.Fragment>
               {loginError&&<Alert color="danger"> {loginError}</Alert>}
                <Form onSubmit={onSubmitHandler} style={{marginTop:"20%"}}>
                <h3 style={{color:"#141c3a"}}>Get Started Today!</h3>
               <hr style={{borderBottom:"1px solid #141c3a"}}></hr>
                
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="" />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="" />
                    </FormGroup>
                    <Button style={loginStyle} block>Login</Button>
                    <hr></hr>
                    <FormText>By signing up for KidCoder, you agree to KidCoder's <a style={impLink} href="/terms">Terms of Service</a> & <a style={impLink} href="policy">Privacy Policy</a>.</FormText>
                </Form>
           </React.Fragment>
    )
}

export default LoginForm
