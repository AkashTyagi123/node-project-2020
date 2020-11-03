import React from 'react';

const AppealingText = (props) =>{
    const style={
        maxWidth:"70%",
        marginTop:"10%"
    }
   
    return(
       <React.Fragment>
           <div className="text-green">
               <h1>Launch your coding career early in life with Kidcoder</h1>
           </div>
           <img style={style} alt="Spaceman" src={props.imgSrc}/>
       </React.Fragment>
    )
}
export default AppealingText;