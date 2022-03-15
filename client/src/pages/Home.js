import  React,{ Component } from  'react';
import GABP from '../img/GABP.jpg'
import Navbar from './Navbar';
// import ImageSlider from '../components/ImageSlider';
// import { SliderData } from './components/SliderData';
import Slideshow from '../components/ImageSlider';
import { Card, Button } from 'react-bootstrap';
import HotelsImg from '../img/hotels.webp';
import EatImg from '../img/Eat-&-drink.jpg';
import TripImg from '../img/tripMuseum.jpg';
import TrainImg from '../img/dinnerTrain.jpg';
import { FaNs8 } from 'react-icons/fa';
import CincyImg from '../img/Cincy-at-night.jpg';
import PlayImg from '../img/Casino.png';
import FanImg from '../img/Bengal-fans.jpg';
import ZooImg from '../img/Cincy-zoo.jpg';
import WineTourImg from '../img/wine-tour.jpg';
import HardRockImg from '../img/Hard-Rock-Cafe.jpg';
import '../styles/Home.css';


const Home = () =>{
  return (
    <div class= 'container'>    
    <h1 className='about-heading'>Join the Queen City for your next adventure!</h1>
    <img src={CincyImg} alt="mypic" className='img'/>  
    <img src={GABP} alt="mypic" className='img'/>
    <img src={WineTourImg} alt="mypic" className='img'/>
    <img src={HardRockImg} alt="mypic" className='img'/>


      <div className='cards' class='container'>
        <Card style={{ width: '24rem' }} />
      <Card.Img variant="top" src={ZooImg} alt=''/>
      <Card.Body> 
        <Card.Title>Things To Do</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" className='button'>Check It Out</Button>
      </Card.Body>
      
      </div>
    
      <div className='cards' class='container'>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={HotelsImg} alt='' />
      <Card.Body>
        <Card.Title>Places To Stay</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary" className='button'>Check It Out</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='cards' class='container'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={EatImg} alt='' />
      <Card.Body>
        <Card.Title>Eat & Drink</Card.Title>
        <Card.Text>
        
          
        </Card.Text>
        <Button variant="primary" className='button'>Check It Out</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='cards' class='container'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={TrainImg} alt='' />
      <Card.Body>
        <Card.Title>Trip Ideas</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary" className='button'>Check It Out</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
    

  )};

  export default Home;