import React from 'react';



const connect = ()=>{
  const style = {
    backgroundColor:"rgba(3, 168, 124, 1)",
    color:"#fff"
  }
    return(
      
      <form class="contact-form">
          
        <input  className="form-item" id="name" name="name" type="text" placeholder="Your Name"/>
       
        <input className="form-item"  id="email" name="email" type="email" placeholder="Email"/>
        
        <input  className="form-item" id="msg" name="msg" type="text" placeholder="your query or feedback"/>

        <button className="form-item form-button">Send your message</button>
        
        
      </form>
      
       
         
     
    );
}
export default connect;