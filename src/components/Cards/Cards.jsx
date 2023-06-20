import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StudentCard from '../Card/StudentCard';
import './Cards.css'

const Cards = () => {
      const [details,setdetails]=useState([]);
      var length=details.length;
      useEffect(() =>{
        fetch('./studentdata.json')
        .then(res => res.json())
        .then(data => setdetails(data));
      },[])
    return (
        <div className='cards'>
           <h5>Students : {length}</h5>
           
           
           <div className='details'>
           {
           
            details.map(detail => <StudentCard detail={detail}></StudentCard>)
            
           }
           </div>
           
         
      </div>
        
    );
};

export default Cards;