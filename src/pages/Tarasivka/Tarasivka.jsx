import { useNavigate } from 'react-router-dom'
import '../Project.css'
import TopImage from './Images/TopImage.png'
import Resources from '../components/Resources';
import Menu from '../components/Menu';
import logo from'../../images/logo.png';
import logoBlack from'../../images/logoBlack.png';
import image1 from './Images/image1.png'
import image2_1 from './Images/image2_1.png'
import image2_2 from './Images/image2_2.png'
import image3 from './Images/image3.png'
import image4 from './Images/image4.png'
import image5_1 from './Images/image5_1.png'
import image5_2 from './Images/image5_2.png'
import image6 from './Images/image6.png'
import image7_1 from './Images/image7_1.png'
import image7_2 from './Images/image7_2.png'
import image8 from './Images/image8.png'
import image9 from './Images/image9.png'
import image10 from './Images/image10.png'
import image11_1 from './Images/image11_1.png'
import image11_2 from './Images/image11_2.png'
import image12 from './Images/image12.png'
import image13_1 from './Images/image13_1.png'
import image13_2 from './Images/image13_2.png'
import image14 from './Images/image14.png'
import image15 from './Images/image15.png'
import image16_1 from './Images/image16_1.png'
import image16_2 from './Images/image16_2.png'
import image17_1 from './Images/image17_1.png'
import image17_2 from './Images/image17_2.png'
import image18 from './Images/image18.png'
import image19 from './Images/image19.png'
import image20 from './Images/image20.png'
import image21 from './Images/image21.png'
import image22 from './Images/image22.png'
import image23_1 from './Images/image23_1.png'
import image23_2 from './Images/image23_2.png'
import image24_1 from './Images/image24_1.png'
import image24_2 from './Images/image24_2.png'
import { useRef, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import FooterImg from './Images/Footer.png'
function Tarasivka({}) {

    const navigate = useNavigate();

    const [show,setShow] = useState();

    document.body.style.overflow='hidden'
    document.body.style.overflowY='auto'
    document.body.style.background='white'
    
    const ref0 = useRef()

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
          <p>Проект Тарасівка</p>
          <img className='PortfolioImage' src={image1} style={{marginTop:'0px'}}/>
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image2_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image2_2} />
          </div>
          <img className='PortfolioImage' src={image3}/>
          <img className='PortfolioImage' src={image4}/>
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image5_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image5_2} />
          </div>
          <img className='PortfolioImage' src={image6}/>
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image7_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image7_2} />
          </div>
          <img className='PortfolioImage' src={image8}/>
          <img className='PortfolioImage' src={image9}/>
          <img className='PortfolioImage' src={image10}/>
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image11_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image11_2} />
          </div>
          <img className='PortfolioImage' src={image12}/>
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image13_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image13_2} />
          </div>
          <img className='PortfolioImage' src={image14}/>
          <img className='PortfolioImage' src={image15}/>
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image16_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image16_2} />
          </div>
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image17_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image17_2} />
          </div>
          <img className='PortfolioImage' style={{width:'60%'}} src={image18} />
          <img className='PortfolioImage' style={{width:'60%'}} src={image19} />
          <img className='PortfolioImage' style={{width:'60%'}} src={image20} />
          <img className='PortfolioImage' style={{width:'60%'}} src={image21} />
          <img className='PortfolioImage' style={{width:'60%'}} src={image22} />
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image23_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image23_2} />
          </div>
          <div className='PortfolioImage container'>
            <img className='PortfolioImage' style={{width:'45%'}} src={image24_1} />
            <img className='PortfolioImage' style={{width:'45%'}} src={image24_2} />
          </div>
        </div>
      <Footer id={2} image={FooterImg}/>
    </div>
  )
}

export default Tarasivka
