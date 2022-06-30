import './login.css';
import { useHistory } from 'react-router-dom';

function Login(){

    const btn ={
        width: '150px',
        height: '30px' ,
        marginTop:'3%'
    }
    let history  = useHistory();
    const Login = (()=>{
        history.push("/Home") ;
    })
    
    return(
    <div className="container">

        <h1>Login</h1>
            <input type="email" placeholder="enter your email" /><br></br> 

            <input type="password" placeholder="enter password" /><br></br>
            <button style={btn} onClick={Login}>Login </button>

        </div>
    );

        
    
}

export default Login