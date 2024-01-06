import { useEffect, useRef, useState } from 'react'
import './App.css'
import logo from'./images/logo.png';
import video from './images/video.mp4'
import arrowDown from './images/arrowDown.png'
import arrowUp from './images/arrowUp.png'
import mainImage1 from './images/mainImage1.png'
import mainImage2 from './images/mainImage2.png'
import topright from './images/topright.png'
import topleft from './images/topleft.png'
import bottomleft from './images/bottomleft.png'
import bottomright from './images/bottomright.png'
import logo2 from './images/logo2.png'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import Menu from './pages/components/Menu';
import Resources from './pages/components/Resources';
import konchaZaspa from './images/konchezaspa.png'
import tarasivka from './images/tarasivka.png'
import gatne from './images/gatne.png'
import gatne2 from './images/gatne2.png'
import hotyanivka from './images/hotyanivka.png'
import carouselbackground from './images/carouselbackground.png'
import { useNavigate } from 'react-router-dom';

function App() {
  const [show,setShow] = useState(false);
  const navigate = useNavigate();

  const reset = ()=>{
    setSelected(false);
    setShow(false);
    setAbout(false);
    setContacts(false);
  }

  const showHandler = (value)=>{
    if(value=='Menu'){
      setShow(!show)

    }else if(value=='Contacts'){
      setShow(false)
      setAbout(false)
      setContacts(true)
      
    }else if(value = 'About'){
      setShow(false)
      setContacts(false)
      setAbout(true)
    }
  }
  
  const [globalCount,setGlobalCount] = useState(0);
  const [currentPosition,setCurrentPosition] = useState(0);
  
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  let k =0;
  let i =0;
  
  const test = (e)=>{
    console.log(e.nativeEvent.wheelDelta)
    if(globalCount!=0){
      setCurrentPosition(1)
    }
    if (e.nativeEvent.wheelDelta > 0) {
      if(globalCount==0){
        
      }
      if(globalCount==1){
        k++;
        if(k>=3){
          setGlobalCount(0);
          k=0;
        }
      }
      if(globalCount==2){
        k++;
        if(k>=3){
          setGlobalCount(1);
          k=0;
        }
      }
      if(globalCount==3){
        k++;
        if(k>=3){
          setGlobalCount(2);
          k=0;
        }
      }
      if(globalCount==4){
        k++;
        if(k>=3){
          setGlobalCount(3);
          k=0;
        }
      }
    } 
    else {
      if(globalCount==0){
        i++;
        if(i>=3){
          setGlobalCount(1);
          i=0;
        }
      }
      if(globalCount==1){
        i++;
        if(i>=3){
          setGlobalCount(2);
          i=0;
        }
      }
      if(globalCount==2){
        i++;
        if(i>=3){
          setGlobalCount(3);
          i=0;
        }
      }
      if(globalCount==3){
        i++;
        if(i>=3){
          setGlobalCount(4);
          i=0;
        }
      }
      if(globalCount==4){

      }
    }

  }

  const handleArrowClick = (value)=>{
    console.log(value)
    console.log(globalCount)
    if(globalCount!=0){
      setCurrentPosition(1)
    }
    if(globalCount+value<=4 && globalCount+value>=0){
      setGlobalCount(globalCount+value)
    }
  }

  const [test1,setTest1] = useState(false)
  const [test2,setTest2] = useState(false)

  useEffect(()=>{
    if(currentPosition!=0 && globalCount==0){
      handleClick(ref0)
      setTest1(false)
      setTest2(false)
    }
    if(globalCount==1)
    {
      handleClick(ref1)
      setTest1(true)
      setTest2(false)
    }
    if(globalCount==2)
    {
      handleClick(ref2)
      setTest1(false)
      setTest2(true)
    }
    if(globalCount==3){
      handleClick(ref3)
      setTest1(false)
      setTest2(false)
    }
    if(globalCount==4){
      handleClick(ref4)
      setTest1(false)
      setTest2(false)
    }
    if(globalCount==5){
      setGlobalCount(0)
      setTest1(false)
      setTest2(false)
    }
  })



  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    console.log(screenHeight)
    console.log(screenWidth)
    if(screenHeight>=900 && screenWidth>=1080)
    {
      document.body.style.overflow='hidden'
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  useEffect(()=>{
    ref0.current?.scrollIntoView();
  },[])

  return (
    <div className='MainContainer' >

      <div className='MainPageContainer' onWheel={(e)=>test(e)} ref={ref0} onDrag={(e)=>console.log(e.nativeEvent)}>
      <video width="100%" preload="auto" height="100%" autoPlay={true} loop={true} muted={true} style={{opacity:0.6,objectFit:'fill'}}><source type="video/mp4" src={video} /></video>
      <div className='VideoTopWrapper'>
        <p className='Writing'>Природа створює красу , ми її підкреслюємо</p>
      </div>
      <div className='AboutLinkContainer' onClick={()=>navigate('/about')}>
        ПРО НАС
      </div>
      <img className='Logo' src={logo} onClick={()=>reset()}/>
        <div className='Menu1' onClick={()=>showHandler('Menu')}>
          <div className='MenuWriting'>Меню</div>
          <div className='MenuButton' style={show ? {justifyContent:'center'}:null}>
            <div className='MenuRectangle' style={show ? {rotate:'-45deg'} : null} />
            <div className='MenuRectangle' style={show ? {rotate:'45deg'} : null} />
            <div className='MenuRectangle' style={show ? {flex:'0'} : null}/>
          </div>
        </div>
      </div>

      <div className='ArrowsContainer'>
          <img className="arrow-right" src={arrowUp} onClick={()=>handleArrowClick(-1)}/>
          <img className="arrow-right" src={arrowDown} onClick={()=>handleArrowClick(1)}/>
       </div>

      <div className='MainPartContainer' ref={ref1} onWheel={(e)=>test(e)}>
          <div className='ImageWrapper'>
            <img src={mainImage1} className='MainImage' style={{cursor:'pointer'}} onClick={()=>navigate('/projects/1')}/>
            <p className={!test1?'HeadNaming':'HeadNamingAnimated'} style={{cursor:'pointer'}} onClick={()=>navigate('/projects/2')}>Об'єкт Конче Заспа</p>
          </div>
      </div>

      <div className='MainPartContainer' ref={ref2} onWheel={(e)=>test(e)}>
          <div className='ImageWrapper' style={{background:'rgba(77, 61, 59, 1)'}}>
            <img src={mainImage2} className='MainImage' style={{cursor:'pointer'}} onClick={()=>navigate('/projects/2')}/>
            <p className={!test2?'HeadNaming':'HeadNamingAnimated'} style={{cursor:'pointer'}} onClick={()=>navigate('/projects/2')}>Об'єкт Тарасівка</p>
          </div>
      </div>


      <div className='MainPartContainer' ref={ref3} onWheel={(e)=>test(e)}>
        <img className='LogoSecond' src={logo2} style={{zIndex:'20'}}/>
        <div className='ImagesGrid'>
          <div className='GridImageContainer'>
            <img className='GridImage' src={topleft} />
            <div className='ImageWrapper' />
          </div>
          <div className='GridImageContainer'>
            <img className='GridImage' src={topright} />
            <div className='ImageWrapper' />
          </div>
          <div className='GridImageContainer'>
            <img className='GridImage' src={bottomleft} />
            <div className='ImageWrapper' />
          </div>
          <div className='GridImageContainer'>
            <img className='GridImage' src={bottomright} />
            <div className='ImageWrapper' />
          </div>
       </div>

      </div>

      <div className='MainPartContainer responsive'  ref={ref4} onWheel={(e)=>test(e)} style={{backgroundImage: `url(${carouselbackground})`,opacity:'0.8'}}>
        <p style={{fontSize:'38px',marginBottom:'20px'}}>Портфоліо</p>

      <div style={{
          paddingBottom: '30px',
          position: 'relative',
          width:'60%',
          height:'60vh',
          display:'flex',
          alignContent:'center',
          justifyContent:'center'
        }}>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="carouselClass"
            containerClass="CarouselContainer"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={true}
            renderDotsOutside
            autoPlay={true}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 1
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 1
              }
            }}
            rewind={true}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <img
              src={konchaZaspa}
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
            <img
              src={tarasivka}
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
            <img
              src={gatne}
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
            <img
              src={gatne2}
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
            <img
              src={hotyanivka}
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
          </Carousel>
        </div>
      </div>



      <Menu show={show}/>
      <Resources />
    </div>
  )
}

export default App
