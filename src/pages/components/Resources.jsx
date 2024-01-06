import { useNavigate } from 'react-router-dom'
import menuImage from '../../images/menuImage.svg'
import facebook from'../../images/facebook.png';
import facebookBlack from'../../images/facebookBlack.png';
import phone from'../../images/phone.png';
import phoneBlack from'../../images/phoneBlack.png';
import telegram from'../../images/telegram.png';
import telegramBlack from'../../images/telegramBlack.png';
import tiktok from'../../images/tiktok.png';
import tiktokBlack from'../../images/tiktokBlack.png';
import instagram from '../../images/instagram.png'
import instagramBlack from'../../images/instagramBlack.png';

import { useEffect, useRef, useState } from 'react';


function Resources({color,scrollOffset}) {

const navigate = useNavigate();

const [shadow1,setShadow1] = useState(false)
const [shadow2,setShadow2] = useState(false)
const [shadow3,setShadow3] = useState(false)
const [shadow4,setShadow4] = useState(false)
const [shadow5,setShadow5] = useState(false)
const setShadows = (value)=>{
  if(value == 1){
    setShadow2(true)
    setShadow3(true)
    setShadow4(true)
    setShadow5(true)
  }else if(value==2){
    setShadow1(true)
    setShadow3(true)
    setShadow4(true)
    setShadow5(true)
  }else if(value==3){
    setShadow2(true)
    setShadow1(true)
    setShadow4(true)
    setShadow5(true)
  }
  else if(value==4){
    setShadow2(true)
    setShadow1(true)
    setShadow3(true)
    setShadow5(true)
  }else if(value==5){
    setShadow2(true)
    setShadow1(true)
    setShadow3(true)
    setShadow4(true)
  }
}

const removeShadows = ()=>{
  setShadow1(false)
  setShadow2(false)
  setShadow3(false)
  setShadow4(false)
  setShadow5(false)
}

const ref = useRef();


  return (
    <div className='Resources' ref={ref}>
    <div className='ResourcesContainer' style={shadow1 ? {opacity:'0.6'} : null} onMouseEnter={()=>setShadows(1)} onMouseLeave={()=>removeShadows()}>
      <img src={color=='black' && scrollOffset>=200?facebookBlack:facebook} className='ResourcesItem' onClick={()=>handleClick(ref2)}/>
    </div>
    <div className='ResourcesContainer' style={shadow2 ? {opacity:'0.6'} : null}  onMouseEnter={()=>setShadows(2)} onMouseLeave={()=>removeShadows()}>
      <img src={color=='black' && scrollOffset>=200?phoneBlack:phone} className='ResourcesItem'/>
    </div>
    <div className='ResourcesContainer' style={shadow3 ? {opacity:'0.6'} : null}  onMouseEnter={()=>setShadows(3)} onMouseLeave={()=>removeShadows()}>
      <img src={color=='black' && scrollOffset>=200?telegramBlack:telegram} className='ResourcesItem'/>
    </div>
    <div className='ResourcesContainer' style={shadow4 ? {opacity:'0.6'} : null}  onMouseEnter={()=>setShadows(4)} onMouseLeave={()=>removeShadows()}>
      <img src={color=='black' && scrollOffset>=200?tiktokBlack:tiktok} className='ResourcesItem'/>
    </div>
    <div className='ResourcesContainer' style={shadow5 ? {opacity:'0.6'} : null}  onMouseEnter={()=>setShadows(5)} onMouseLeave={()=>removeShadows()}>
      <img src={color=='black' && scrollOffset>=200?instagramBlack:instagram} className='ResourcesItem'/>
    </div>
  </div>
  )
}

export default Resources
