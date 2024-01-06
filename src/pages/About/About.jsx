import './about.css'
import logo from'../../images/logoBlack.png';
import { useEffect, useRef, useState } from 'react';
import Menu from '../components/Menu';
import logo2 from '../../images/close.png'
import Resources from '../components/Resources';
import { useNavigate } from 'react-router-dom';
function About() {
  const [show,setShow] = useState();
  const navigate = useNavigate();
  const [text1,setText1] = useState(false);
  const [text2,setText2] = useState(false);
  const [text3,setText3] = useState(false);
  const [text4,setText4] = useState(false);

  document.body.style.overflow='hidden'
  document.body.style.overflowY='auto'
  const ref0 = useRef()

  useEffect(()=>{
    ref0.current?.scrollIntoView();
  },[])

  return (
    <div className='AboutMainContainer' ref={ref0}>
      <img className='Logo' src={logo} onClick={()=>navigate('/')}/>
      <div className='Menu1' onClick={()=>setShow(!show)}>
          <div style={show?{color:'white'}:{color:'black'}} className='MenuWriting'>Меню</div>
          <div className='MenuButton' style={show ? {justifyContent:'center'}:null}>
            <div className='MenuRectangle' style={show ? {rotate:'-45deg'} : {backgroundColor:'black'}} />
            <div className='MenuRectangle' style={show ? {rotate:'45deg'} : {backgroundColor:'black'}} />
            <div className='MenuRectangle' style={show ? {flex:'0'} : {backgroundColor:'black'}}/>
          </div>
        </div>

      <div className='AboutContainer'>
        <p className='Text Black'>Ginkgo Landscape design Company - студія ландшафтного дизайну.</p>
        <p className='Text Black'>Природа створює красу. Ми її підкреслюємо.</p>
        <p className='Text Black'>Наша мета – створювати естетично привабливий простір. Ми вдосконалюємо ваше середовище більше 15 років, і тому точно знаємо, що потрібно клієнту.</p>
        <div className='AdvantagesContainer'>
          <div className='Advantage'>
            <div className='AdvantageButton' style={text1?{border:'none'}:null} onMouseOver={()=>setText1(true)}>
              Індивідуальний підхід
            </div>
            <p style={text1?{fontSize:'18px',marginTop:'30px',opacity:'0',animation:'appear 1s',animationFillMode:'forwards'}:{display:'none'}}>Ділянки бувають різними, побажання клієнтів бувають різними.<br/>Враховуючи всі особливості, втілимо ваші мрії та додамо нашого професійного погляду.</p>
          </div>
          <div className='Advantage'>
            <div className='AdvantageButton' style={text2?{border:'none'}:null} onMouseOver={()=>setText2(true)}>
              Детальне планування
            </div>
            <p style={text2?{fontSize:'18px',marginTop:'30px',opacity:'0',animation:'appear 1s',animationFillMode:'forwards'}:{display:'none'}}>
              При проектування враховуємо всі фактори які мають вплив як на зовнішній вигляд, так і функціональність вашої ділянки.
              Іншими словами, робимо красиво і зручно.
            </p>
          </div>
          <div className='Advantage'>
            <div className='AdvantageButton' style={text3?{border:'none'}:null} onMouseOver={()=>setText3(true)}>
              Висока якість матеріалів
            </div>
            <p style={text3?{fontSize:'18px',marginTop:'30px',opacity:'0',animation:'appear 1s',animationFillMode:'forwards'}:{display:'none'}}>
              У роботі використовуємо такі матеріали як…
            </p>
          </div>
          <div className='Advantage'>
            <div className='AdvantageButton' style={text4?{border:'none'}:null} onMouseOver={()=>setText4(true)}>
              Своєчасне виконання
            </div>
            <p style={text4?{fontSize:'18px',marginTop:'30px',opacity:'0',animation:'appear 1s',animationFillMode:'forwards'}:{display:'none'}}>
              Ми дотримуємось дедлайнів. У разі виникнення непередбачуваних ситуацій, вирішуємо всі питання якнайшвидше.
            </p>
          </div>
        </div>
      </div>
      <div className='AboutSpacingContainer'>
        <div style={{width:"70%",height:'100%'}}>
          <div style={{height:'auto',width:'100%'}}>
            <p>Наш досвід роботи починається в далекому 2007 році , коли ми почали займатись озелененням прибудинкових ділянок , а через деякий час і обслуговуванням .
            <br/>
            Роботи було багато , навіть почали відмовлятись від майбутніх клієнтів , тому що фізично не могли їх реалізувати , але про створення компанії не те що не наважувались , але й не думали ... 
            <br/>
            Звісно, ми наймали до себе робітників , але все рівно були присутні на всіх видах робіт та працювали власноруч на об'єкт. Таким чином ми працювали до сьогодення , і мали справу з великою кількістю труднощів і не стандартних ситуацій .
            <br/>
            Набравшись певного досвіду та знань , ми не тільки надаємо вам якісні послуги , але й готові розширювати наші можливості ! 
            <br/>
            Тому зараз будуємо міцну команду Ginkgo , яка буде професійно втілювати ваші мрії у життя.
            </p>
          </div>
        </div>
      </div>
      

      <Resources color={show?'':'black'}/>
      <Menu show={show}/>
    </div>
  )
}

export default About
