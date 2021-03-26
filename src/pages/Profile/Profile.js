import React, { useState } from 'react';
import './Profile.css'
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";
function Profile() {
    const [name, setName] = useState(' ');
    const [{  user, userProfile }, dispatch] = useStateValue();
    const saveProfile = () => {
        // remove the item from the basket
        dispatch({
            type: 'save_Profile',
            userProfile: {
                userName: name ,
                userEmail: user.email,
                userPwd: user.password,
                balance:20}


        })
    }

console.log(userProfile)
    return ( 
        <div className = 'login' >
        <header className='header'>
            <div className='container'>
                <Link to="/" className='logoContainer'>
                    <Logo className='logo'/>
                    
                </Link>
            </div>
        </header>

        < div className = 'login__container' >
        <h1 > Profile </h1>

        <form>
        <h5 > username </h5> 
        < input type = 'text'
        value = { name }
        onChange = { e => setName(e.target.value) }
        />
        </form>
        <h5 > E - mail </h5> 
        < h5>{ user.email }</h5> 
        <h5 > Password </h5> 
        < h5>{ user.password }</h5> 
        <h5 > Balance </h5> 
        
        {
            userProfile.map(userProfile => ( 
                userProfile.balance
            ))
        } 

     

       <Link to = { '/test' }  >
        <button 
        onClick = { saveProfile }
        className = 'login__registerButton' > Save your Profile</button></Link>
        </div >
        </div>
    )
}


export default Profile;