import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""})
    let navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const {name,email,password}=credentials;
        const response=await fetch(`http://localhost:5000/api/auth/createuser`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify({name,email,password})
          });
          const json=await response.json();
          console.log(json);
          if (json.success){
            localStorage.setItem('token',json.authtoken);
            navigate("/");
            props.showAlert("Succcessfully Created Account","success")
          }
          else{
            props.showAlert("Invalid Ceredentials","danger")
          }
    }

    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div className='container mt-2'>
        <h2 className='my-3'>Create an Account on iNotebook</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' id="name" onChange={onChange} aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' id="email" onChange={onChange} aria-describedby="emailHelp" required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' id="password" onChange={onChange} minLength={4} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name='cpassword' id="cpassword" onChange={onChange} minLength={4} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Signup
