import { useNavigate } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePointOfSale } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";
import { GrRestaurant } from "react-icons/gr";
import { IoIosExit } from "react-icons/io";


import './adminPage.scss'
import { useEffect, useState } from "react";


const AdminPage = () => {
  
  const navigate = useNavigate();
  const [currentDate, setCurretDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurretDate(new Date());
    },1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => { 
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${dayName}, ${day} de ${month}`;
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'pm' : 'am';

    //Convirtiendo a formato de doce horas
    hours = hours  % 12;
    hours = hours ? hours : 12; 

    return `${hours}:${minutes} ${period}`;
  };

  const handleLogout = () => { 
    sessionStorage.removeItem('isAdminAuthenticated');
    navigate('/login');
  };

  const handleToMenu = () => {
    navigate('/admin/menu');
  }

  return(
    <>
      <section className="containerAdmin"> 
      <div className="containerAdmin-header">
        <div className="containerAdmin-header-title">
          <h1>¡ Bienvenido, Admin !</h1>
        </div>
        <div className="containerAdmin-header-data">
          <h3>{formatDate(currentDate)}</h3> 
          <h4>{formatTime(currentDate)}</h4>
        </div>
      </div>
      <div className="containerAdmin-buttons">
        <ul>
          <li onClick={handleToMenu}> 
            <span> 
              <MdMenuBook />
            </span>
            <p>
              Menu
            </p>
          </li>
          <li> 
            <span> 
              <FaUsers />
            </span>
            <p>
              Usuarios
            </p>
          </li>
          <li> 
            <span> 
              <MdOutlinePointOfSale />
            </span>
            <p>
              Ventas
            </p>
          </li>
          <li> 
            <span> 
              <MdTableRestaurant />
            </span>
            <p>
              Mesas  
            </p>
          </li>
          <li> 
            <span> 
              <MdOutlineInventory />
            </span>
            <p>
              Inventario
            </p>
          </li>
          <li> 
            <span> 
              <RiReservedFill />
            </span>
            <p>
              Reservaciones
            </p>
          </li>
          <li> 
            <span>
              <GrRestaurant />
            </span>
            <p>
              Recetas
            </p>
          </li>
          <li onClick={handleLogout}> 
            <span> 
              <IoIosExit />
            </span>
            <p>
              Salir
            </p>
          </li>
        </ul> 
      </div>
      </section>
    </>
  )

}

export default AdminPage;
