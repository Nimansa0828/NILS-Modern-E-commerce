import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Hand-icon.png'
import arrow_icon from '../Assets/right-arrow.png'
import hero_image from '../Assets/Hero-image.jpg'
import { useNavigate } from 'react-router-dom';


export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='Hero'>
      

        <div className="hero-left">
           <h2>NEW ARRIVALS ONLY</h2>
           <div>
             <div className="hero-hand-icon">
                <p>shop</p>
                <p>now</p>
                <img src={hand_icon} alt="" />
                
                
             </div>
             <p>PAY LATER</p>
             
             
           </div>
           <div className="hero-latest-btn" onClick={() => navigate('/Featured/new')}>
  <div>Latest Collection</div>
  <img src={arrow_icon} alt="" />
</div>

        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />

        </div>

    </div>
  )
}
export default Hero;
