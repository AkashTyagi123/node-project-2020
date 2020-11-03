import React,{useState} from 'react'
import {useStateValue} from '../StateProvider/StateProvider';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'
function Dashboard() {
    const [{user,currentPlaying},dispatch] = useStateValue();
    const [courseItems,setCourse] = useStateValue([]);
    const [file,setFile] = useState(null);
    const history = useHistory();
   const onClickHandler1 = (e)=>{
       
       dispatch({type:"SET_CURRENT_PLAYING",src:"https://www.youtube.com/embed/6FOq4cUdH8k"});
   
    }

    const onClickHandler2 = (e)=>{
       
        dispatch({type:"SET_CURRENT_PLAYING",src:"https://www.youtube.com/embed/LoziivfAAjE"});
    
     }


     const onClickHandler3 = (e)=>{
       
        dispatch({type:"SET_CURRENT_PLAYING",src:"https://www.youtube.com/embed/7nafaH9SddU"});
    
     }


     const onClickHandler4 = (e)=>{
       
        dispatch({type:"SET_CURRENT_PLAYING",src:"https://www.youtube.com/embed/fBNz5xF-Kx4"});
    
     }

     const onClickHandler5 = (e)=>{
       
        dispatch({type:"SET_CURRENT_PLAYING",src:"https://www.youtube.com/embed/6FOq4cUdH8k"});
    

     }
     const submitForm = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('myfile',file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        axios.post("http://localhost:5000/upload",formData,config)
          .then((response) => {
              alert("The file is successfully uploaded");
          }).catch((error) => {
      });

  
     }
    return (
        <div>
            <form onSubmit={submitForm} style={{textAlign:"center"}} encType="multipart/form-data" method="POST">
                <h4>Upload certificates</h4>
                <input type="file" name="certificate" onChange={e=>setFile(e.target.files)}></input>
                <button type="submit" className="upload_btn">Upload to server</button>
            </form>
            {user?<div className="dashboard">
            <div className="dashboard__video">
            <iframe width="1080" height="600" src={currentPlaying} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="dashboard__menu">
                <h1>Course content</h1>
                <p onClick={onClickHandler1} className="dashboard__menuItem">Node js crash course</p>
                <p onClick={onClickHandler2} className="dashboard__menuItem">Node js with passport authentication</p>
                <p onClick={onClickHandler3} className="dashboard__menuItem">Intro to web scrapping with Node.js</p>
                <p onClick={onClickHandler4} className="dashboard__menuItem">Node js API authentication with jwt</p>
                <p onClick={onClickHandler5} className="dashboard__menuItem">Send SMS text from Node.js</p>
                <p className="dashboard__menuItem">Node js image uploading with multer</p>
                <p className="dashboard__menuItem">Build a command line interface with Node.js</p>
                <p className="dashboard__menuItem">Using MySQL with Node.js</p>
                <p className="dashboard__menuItem">Introduction to paypal SDK with Node.js</p>

            </div>
               
            </div>:history.push('/login')}
        </div>
    )
}

export default Dashboard;
