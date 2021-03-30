import React, { useState } from 'react';
import './Profile.css'
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg";
import { auth } from "../../firebase";
import UserStockInfo from "../../components/UserStockInfo/UserStockInfo"
import { useStateValue } from "../../StateProvider";
function Profile() {
    const [{  user, userProfile,basket }, dispatch] = useStateValue();
    // const saveProfile = () => {
    //     // remove the item from the basket
    //     dispatch({
    //         type: 'save_Profile',
    //         userProfile: {
    //             userName: name ,
    //             userEmail: user.email,
    //             userPwd: user.password,
    //             balance :100}


    //     })
    // }

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
        <div className = 'container'>

        < div className = 'login__container' >
        <h1 > Profile </h1>
        <h4 > Username :</h4> 
        <h6>{ userProfile.name }</h6> 
        <h4 > E - mail :</h4> 
        <h6>{ user.email }</h6> 
        <h4>Gender:</h4>
        <h6>{ userProfile.gender }</h6>
        <h4>Age:</h4>
        <h6>{ userProfile.Age }</h6>
        <h4 > Balance </h4> 
        <h6>{ userProfile.balance }</h6>
        <Link to = { '/editprofile' }  >
        <button className = 'login__registerButton' > Edit  your Profile</button>
        </Link>
        
        </div >
        <div className = 'login__container' ><UserStockInfo/></div>
        <div className = 'login__container' ><UserStockInfo/></div>
        </div>
        
        </div>
    )
}


export default Profile;