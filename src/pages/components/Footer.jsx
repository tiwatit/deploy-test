import { useNavigate } from 'react-router-dom'
import menuImage from '../../images/menuImage.svg'
import logo from '../../images/logo2.png'
function Footer({id,image}) {

    const navigate = useNavigate();
    const arr = ['Конче Заспа','Тарасівка','Гатне','Гатне 2','Хотянівка']

  

  return (
    <div className='FooterContainer' style={{background:`url(${image})`,marginTop:'20px'}}>
        <p style={{cursor:'pointer'}} onClick={()=>navigate(`/projects/${id+1}`)}>Наступний проєкт</p>
        <p style={{cursor:'pointer'}} onClick={()=>navigate(`/projects/${id+1}`)}>{arr[id]}</p>
    </div>
  )
}

export default Footer
