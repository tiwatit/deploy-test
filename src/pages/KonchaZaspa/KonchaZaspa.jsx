import { useNavigate } from 'react-router-dom'
import '../Project.css'
import TopImage from './Images/TopImage.png'
import Resources from '../components/Resources';
import Menu from '../components/Menu';
import logo from'../../images/logo.png';
import logoBlack from'../../images/logoBlack.png';
import image1 from './Images/image1.png'
import image2 from './Images/image2.png'
import image3 from './Images/image3.png'
import image4_1 from './Images/image4_1.png'
import image4_2 from './Images/image4_2.png'
import image5 from './Images/image5.png'
import image6 from './Images/image6.png'
import image7 from './Images/image7.png'
import image8_1 from './Images/image8_1.png'
import image8_2 from './Images/image8_2.png'
import image9 from './Images/image9.png'
import image10_1 from './Images/image10_1.png'
import image10_2 from './Images/image10_2.png'
import image11 from './Images/image11.png'
import image12 from './Images/image12.png'
import image13_1 from './Images/image13_1.png'
import image13_2 from './Images/image13_2.png'
import { useRef, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import FooterImg from './Images/Footer.png'
function KonchaZaspa({}) {

    const navigate = useNavigate();

    const [show,setShow] = useState();

    document.body.style.overflow='hidden'
    document.body.style.overflowY='auto'
    document.body.style.background='white'
    
    const ref0 = useRef();

    useEffect(()=>{
      ref0.current?.scrollIntoView();
    },[])

    const [offset,setOffset]=useState()

    const test = async()=>{
      setOffset(0+window.scrollY)
      console.log(offset)
      console.log('lox')
      console.log(window.scrollY)
  }

  return (
    <div className='ProjectMainContainer' onWheel={()=>test()}>
      <img className='ProjectTop' src={TopImage} ref={ref0}/>

      
      <Menu show={show}/>
      <Resources color={show?'':'black'}  scrollOffset={offset}/>
      {/* Menu */}
      <img className='Logo' src={window.scrollY>=100?logoBlack:logo} onClick={()=>navigate('/')}/>
      <div className='Menu1' onClick={()=>setShow(!show)}>
          <div style={show?{color:'white'}:window.scrollY<100?{color:'white'}:{color:'black'}} className='MenuWriting'>Меню</div>
          <div className='MenuButton' style={show ? {justifyContent:'center'}:null}>
            <div className='MenuRectangle' style={show ? {rotate:'-45deg'} : window.scrollY<100?{backgroundColor:'white'}:{backgroundColor:'black'}} />
            <div className='MenuRectangle' style={show ? {rotate:'45deg'} : window.scrollY<100?{backgroundColor:'white'}:{backgroundColor:'black'}} />
            <div className='MenuRectangle' style={show ? {flex:'0'} : window.scrollY<100?{backgroundColor:'white'}:{backgroundColor:'black'}}/>
          </div>
        </div>

        <div className='PortfolioContainer'>
          <p>Проект Конче Заспа</p>
          <img className='PortfolioImage' src={image1} style={{marginTop:'0px'}}/>
          <img className='PortfolioImage' src={image2} />
          <img className='PortfolioImage' src={image3} />
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image4_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image4_2} />
          </div>
          <img className='PortfolioImage' src={image5} />
          <img className='PortfolioImage' src={image6} />
          <img className='PortfolioImage' src={image7} />
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image8_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image8_2} />
          </div>
          <img className='PortfolioImage' src={image9} />
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image10_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image10_2} />
          </div>
          <img className='PortfolioImage' src={image11} />
          <img className='PortfolioImage' src={image12} />
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'55%'}} src={image13_1} />
            <img className='PortfolioImage' style={{width:'35%'}} src={image13_2} />
          </div>
        </div>
      <Footer id={1} image={FooterImg}/>
    </div>
  )
}

export default KonchaZaspa
