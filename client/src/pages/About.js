import React from 'react';
import Navbar from './Navbar';
import ThingsImg from '../img/Cincy-at-night.jpg';
import AboutImg from '../img/about-cinci.webp';
import OldImg from '../img/cinci-old.jpg';
import MuseumImg from '../img/Cincy-museum-inside.jpg';
import SkylineImg from '../img/skyline-chili.jpg';
import OldFtnSqImg from '../img/OldFountainSq.jpg';
import OldRFStadiumImg from '../img/oldRFStadium.jpg';
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
                <img src={ OldFtnSqImg } alt='' className='img'></img>
                <img src={ AboutImg } alt='' className='img'></img>
                <img src={ OldRFStadiumImg } alt='' className='img'></img>
                  
                <h2 className="heading">
                                Did You Know?
                                </h2>




                 <h3 className='heading-two'>
                 Cincinnati Ohio was settled in 1788 and is the cultural hub of the Cincinnati metropolitan area with an estimated population of 2,190,209.  It is the third largest city in Ohio and 64th in the United States.  It is home to three major sports teams: the Cincinnti Reds of MLB, the Cincinnati Bengals of the NFL, and FC Cincinnati of MLS.  We are also home to the Cincinnati Cyclones, a minor league ice hockey team. The University of Cincinnati, a municipal college founded in 1819 is now ranked one of the 50 largest in the United States.  Cincinnati is also the birthplace of William Howard Taft, the 27th President of the United States.  Cincinnati is host to numerous food flavors infused from all around the culinary world.  Cincinnati chili is the areas best known regional food.  Be sure to attend the Taste of Cincinnati, one of the largest street festivals in the U.S. for an insight into our delicious restaurants and bars!
                </h3> 
                <img src={ MuseumImg } alt='' className='img'></img>                    
                <img src={ SkylineImg } alt='' className='img'></img>                    
      </div>

      
  )}

  

  export default About;