import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setcredentials] = useState({email:"",password:""})
    let navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response=await fetch(`https://notebook-app-by-sanket.vercel.app/api/auth/login`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json=await response.json();
          console.log(json);
          if (json.success){
            localStorage.setItem('token',json.authtoken);
            props.showAlert("Logged In Successfully","success")
            navigate("/");
            
          }
          else{
            props.showAlert("Invalid Ceredentials","danger")
          }
    }

    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }

  return (
    <div className='mt-3'>
      <h2 className='my-3'>Login To iNotebook</h2>
        <form onSubmit={handleSubmit}>
            <div className="my-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password"/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

export default Login
