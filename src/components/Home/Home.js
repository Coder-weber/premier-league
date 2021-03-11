import React, { useEffect, useState } from 'react';
import Sports from '../Sports/Sports';

const Home = () => {
    const [leagues,setLeagues]=useState([])
    useEffect(()=>{
    
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    .then(res=>res.json())
    .then(data=>setLeagues(data.leagues))
    },[])
    const display=(leagues)=>{
        return leagues.map(league=>(
            <div className="col-md-4" style={{height:'400px'}}>
                <Sports league={league}></Sports>
            </div>        

        ))
    }
    
    return (
        <div>
        <div className="backpic">
            <h3>Sport Site</h3>
        </div>

        <div className="header" >
                        <div className="container-fluid d-flex justify-content-center" >
                        <div className="row">
                            {
                            display(leagues)
                             }
                 </div>
                </div>
        </div>
    </div>
    );
};

export default Home;