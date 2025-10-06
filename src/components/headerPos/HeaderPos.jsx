import './headerPos.scss';
import { RiHome3Line } from "react-icons/ri";
import { MdOutlineExitToApp } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const HeaderPos = () => {  

  const navigate = useNavigate();

  const handleHome = () => {   
    navigate('/admin')
  }

  const handleLogout = () => {   
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/login');
  }

  return( 
    <>
      <div className="container-HeaderPos">
        <div className='container-HeaderPos-content'> 
        <header className='container-HeaderPos-content-logo'>LeVegetarien</header>
        <div className='container-HeaderPos-content-buttons'>
          <p onClick={handleHome} role="button" ><span><RiHome3Line /></span>Home</p>
          <p onClick={handleLogout} role="button"><span><MdOutlineExitToApp /></span>Cerrar Sesión</p> 
        </div>  
        </div>
      </div>
    </>
  )
}

export default HeaderPos;
