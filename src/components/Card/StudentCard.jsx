import React, { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

const StudentCard = (props) => {
      console.log(props.detail);
      const {name,gender,img} =props.detail; 
    return (
        
     <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">About</Button>
      </Card.Body>
    </Card>
   
      );
};

export default StudentCard;