import React, {useState, useContext} from 'react'
import { FirebaseContext} from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import './Login.css'
import image from '../../Images/loginbg.jpg'


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginerr, setLoginerr] = useState(false)
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(email)
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      // alert('loggedin')
      navigate("/admin");
    }).catch((error)=>{
      // alert(error.message)
      setLoginerr(true)
    })
  }
  
  return (
    <div className='Login'>
        <div className="Login-Wrap">
            <div className="login-img">
              <img src={image} alt="" />
            </div>
            <div className="login-lext">
                <h1>Sign in</h1>
                <div className={loginerr ? "input loginerr" : "input"}>
                    <label htmlFor="">User Name or Email</label>
                    <input type="email" placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Your Password' onChange={(e)=>setPassword(e.target.value)} />
                    {/* <a href="">Forgot your password?</a> */}
                    <button onClick={handleSubmit}>Sign in</button>
                    <p className='wrgmessage'>wrong email or password</p>
                </div>
                <p>Google Privacy Policy and Terms of Service apply.</p>
                <div className='links'>
                <a className='creat' href="https://www.google.com/">Forgot your password?</a>
                <a className='creat' href="https://www.google.com/">Create an Account</a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
