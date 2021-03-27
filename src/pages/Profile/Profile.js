import React, { useState } from 'react';
import './Profile.css'
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";
function Profile() {
    const [name, setName] = useState(' ');
    const [{  user, userProfile,basket }, dispatch] = useStateValue();
    const saveProfile = () => {
        // remove the item from the basket
        dispatch({
            type: 'save_Profile',
            userProfile: {
                userName: name ,
                userEmail: user.email,
                userPwd: user.password,
                balance :100}


        })
    }

    return ( 
        <div className = 'login' >
        <header className='header'>
            <div className='container'>
                <Link to="/" className='logoContainer'>
                    <Logo className='logo'/>
                    <div>Ring</div>
                </Link>
            </div>
        </header>

        < div className = 'login__container' >
        <h1 > Profile </h1>
       
        <h5 > username :</h5> 
        <input type = 'text'
        value = { name }
       
        onChange = { e => setName(e.target.value)}
        />
        <h5 > E - mail :</h5> 
        < h5>{ user.email }</h5> 
        <h5 > Password : </h5> 
        < h5>{ user.email }</h5> 
        <h5 > Balance </h5> 
        < h5>{ userProfile.balance }</h5>

     

       <Link to = { '/profile' }  >
        <button 
        onClick = { saveProfile }
        className = 'login__registerButton' > Edit  your Profile</button></Link>
        </div >
        </div>
    )
}


export default Profile;