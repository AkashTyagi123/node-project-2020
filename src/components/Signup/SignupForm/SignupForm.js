import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input,FormText,Alert} from 'reactstrap';
import axios from 'axios';
function SignupForm() {
    const [email,setEmail] = useState("");
  const [password,setPassWord] = useState("");
  const [confPassword,setConfPassword] = useState("");
  const [name,setName] = useState("");
  const [userConfirmation,setUserConfirmation] = useState("");
  const [userConfirmationError,setUserConfirmationError] = useState("");
  const [confPassError,setConfPassError] = useState("");
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(password !== confPassword)
    {
      setConfPassError("Password and confirm password should match");
      setTimeout(()=>{
        setConfPassError("");
      },4000);
      return;
    }
    else{
        axios.post("http://localhost:5000/user/new",{
        name,
          email,
          password
        })
        .then(res=>{
          console.log(res);
          if(res.data.isSuccess){
            setUserConfirmation(res.data.msg);
            setName("");
            setPassWord("");
            setEmail("");
            setConfPassword("");
          }
          else{
            setUserConfirmationError(res.data.msg);
          }
          setTimeout(()=>{
            setUserConfirmation("");
            setUserConfirmationError("");
          },4000)
        })
        .catch(err=>console.log(err));
    }
    
  }
  
  const signupStyle={
        
    backgroundColor: "rgba(3, 168, 124, 1)",
    
    color:"fff",
    
}
const impLink ={
   color:"rgba(3, 168, 124, 1)" 
}

    return (
        <React.Fragment>
               
                <Form onSubmit={onSubmitHandler} style={{marginTop:"20%"}}>
               
                <h3 style={{color:"#141c3a"}}>Get Started Today!</h3>
               <hr style={{borderBottom:"1px solid #141c3a"}}></hr>
                    {userConfirmation&&<Alert color="success">{userConfirmation}</Alert>}
                    {userConfirmationError&&<Alert color="danger">{userConfirmationError}</Alert>}
                    {confPassError&&<Alert color="danger">{confPassError}</Alert>}
                
                
                    <FormGroup>
                        <Label for="username">Name</Label>
                        <Input value={name} required onChange={(e)=>setName(e.target.value)} type="text" name="name" id="username" placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input value={email} required onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="" />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input value={password} required minLength="6" onChange={(e)=>setPassWord(e.target.value)} type="password" name="password" id="password" placeholder="" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="cnf-password">Confirm Password</Label>
                        <Input value={confPassword} required minLength="6" onChange={(e)=>{setConfPassword(e.target.value)}} type="password" name="cnf-password" id="cnf-password" placeholder="" />
                    </FormGroup>
                    <Button type="submit" style={signupStyle} block>Sign Up</Button>
                    <hr></hr>
                    <FormText>By signing up for KidCoder, you agree to KidCoder's <a style={impLink} href="/terms">Terms of Service</a> & <a style={impLink} href="policy">Privacy Policy</a>.</FormText>
                </Form>
           </React.Fragment>
    )
}

export default SignupForm
