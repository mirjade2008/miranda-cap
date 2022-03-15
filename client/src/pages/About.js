import React from 'react';
import Navbar from './Navbar';
import ThingsImg from '../img/Cincy-at-night.jpg';
import AboutImg from '../img/about-cinci.webp';
import OldImg from '../img/cinci-old.jpg';
import MuseumImg from '../img/Cincy-museum-inside.jpg';
import skylineChiliImg from '../img/skylineChili.webp';
import UnderGrImg from '../img/Queen-City-Underground-Tour.jpg';
import StatueImg from '../img/Cincinnatus.jpg';
import TripImg from '../img/tripMuseum.jpg';
import BengalImg from '../img/BengalHistory.jpeg';
import TasteOfCincyImg from '../img/tasteOfCincy.jpg';
import '../styles/About.css';

export const About = () =>{
  return (
    <div
      // style={{
        
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   height: '50vh'
      // }}
      >         <h1 className="about-heading">
               History
               </h1> 

                <img src={ OldImg } alt='' className='img'></img> 
                <img src={ UnderGrImg } alt='' className='img'></img>
                <img src={ BengalImg } alt='' className='img'></img>
                <img src={ StatueImg } alt='' className='img'></img>
                  
                <h2 className="heading">
                                Did You Know?
                                </h2>


                 <h3 className='heading-two'>
                 Cincinnati Ohio was settled in 1788 and is the cultural hub of the Cincinnati metropolitan area with an estimated population of 2,190,209.  It is the third largest city in Ohio and 64th in the United States.  Cincinnati is named after Lucius Cincinnatus, born in Rome around 519 BC.  Cincinnatus was a military leader who was given absolute power over Rome during wartime. 
                 <p>Cincinnati is home to three major sports teams: the Cincinnti Reds of MLB and very first baseball team in America, the Cincinnati Bengals of the NFL, and FC Cincinnati of MLS.  We are also home to the Cincinnati Cyclones, a minor league ice hockey team. The Queen City is also known for hosting many ballet, orchestra, and theatre shows as well as an abundance of art culture. The University of Cincinnati, a municipal college founded in 1819 is now ranked one of the 50 largest in the United States.  Cincinnati is also the birthplace of William Howard Taft, the 27th President of the United States.  Cincinnati is host to numerous food flavors infused from all around the culinary world.  Cincinnati chili is the areas best known regional food.  Be sure to attend the Taste of Cincinnati, one of the largest street festivals in the U.S. for an insight into our delicious restaurants and bars!</p>
                </h3> 
                <img src={ MuseumImg } alt='' className='img'></img>                    
                <img src={ TripImg } alt='' className='img'></img>                    
                <img src={ skylineChiliImg } alt='' className='img'></img>                    
                <img src={ TasteOfCincyImg } alt='' className='img'></img>                    
      </div>

      
  )}

  

  export default About;