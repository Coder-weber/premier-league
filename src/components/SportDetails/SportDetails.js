import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import img1 from '../../asserts/Photo/male.png';
import img2 from '../../asserts/Photo/female.png';
import foundation from '../../asserts/Icon/found 1.png';
import flag from '../../asserts/Icon/flag (1) 1.png';
import gender from '../../asserts/Icon/male-gender-sign 1.png';
import football from '../../asserts/Icon/football (1) 1.png';
import facebook from '../../asserts/Icon/Facebook.png';
import twitter from  '../../asserts/Icon/Twitter.png';
import youtube from '../../asserts/Icon/YouTube.png';
import './sportDetails.css';
import Header from '../../Header/Header';
const SportDetails = () => {
        const {id}= useParams();
        const [leagueDetails,setLeagueDetails]=useState([])
        useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLeagueDetails(data.leagues[0]))
    },[])
   
    const {strLeague,strGender,strCountry,strSport,strFanart1,strFanart2,strBanner,strLogo,strFacebook,strTwitter,strYoutube,strDescriptionEN,intFormedYear}=leagueDetails;
   
    const indentifyGender=(name)=>{
        if('Male'===name || 'male' ===name)
        {
           return <img style={{}} className="img-fluid" src={img1} alt=""/>        
            
        }
        else{
           return <img style={{}} className="img-fluid" src={img2} alt=""/>        
            
        }
    }

     return (
        <div>
          <div>
              <img className="img-fluid" style={{height:'400px',width:'1339px'}} src={strFanart1} alt=""/>
          </div>
        <div className="container justify-content-center">
         <div className="row bg-primary rounded customize ">
            <div className="col-md-6">
                <h2 className="text-white"> {strLeague} </h2>
                <p className="text-white ">
                <img src={foundation} className="icon" alt=""/>
                Founded:{ intFormedYear}
                </p>
                <p className="text-white" >
                <img src={ flag} className="icon" alt=""/>
                    Country:{ strCountry} 
                </p>
                <p className="text-white">
                <img src={football} className="icon" alt=""/>
                    Sports type: { strSport} 
                </p>
                <p className="text-white">
                <img src={gender} className="icon" alt=""/>
                    Gender :{strGender} 
                </p>
       
            </div>
            <div className="col-md-6">
            {
                indentifyGender(strGender)
            }
            </div>
        </div>
        <div className="row" customize>
            <p className="text">
                {strDescriptionEN}
            </p>
        </div>
        <div className="row">
            <div className="col-md-4 iconModify">
                <a href={strTwitter} target="__blank"><img src={twitter} className="link" alt=""/></a>
                
                </div>
            <div className="col-md-4 iconModify">
            <a href={strFacebook} target="__blank"><img src={facebook} className="link" alt=""/></a>
            </div>
            <div className="col-md-4 iconModify">
            <a href={strYoutube} target="__blank"><img src={youtube} className="link" alt=""/></a>
            </div>
            </div>
        </div>
    </div>
    );
};

export default SportDetails;