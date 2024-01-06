import { useNavigate } from 'react-router-dom'
import menuImage from '../../images/menuImage.svg'
import logo from '../../images/logo2.png'
function Menu({show}) {

    const navigate = useNavigate();

  return (
    <>
    <div className={ show ? 'ActualMenu active' : 'ActualMenu'}>

    <img className='Logotest' src={logo}/>
    <img className='MenuImage' src={menuImage} />
      <ul className='MenuList'>
        <li className='ulItem' style={ show ? {animation:'appear 2s'} : null} onClick={()=>navigate('/')}>Головна</li>
        <li className='ulItem' style={ show ? {animation:'appear 2s'} : null}>Послуги</li>
        <li className='ulItem' style={ show ? {animation:'appear 1s'} : null} onClick={()=>navigate('/projects/1')}>Портфоліо</li>
        <li className='ulItem' style={ show ? {animation:'appear 1s'} : null}  onClick={()=>navigate('/about')}>Про нас</li>
        <li className='ulItem' style={ show ? {animation:'appear 1s'} : null}>Контакти</li>
      </ul>  

    </div>
  </>
  )
}

export default Menu
