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


const AdminPage = () => {
  
  const navigate = useNavigate();

  const handleLogout = () => { 
    sessionStorage.removeItem('isAdminAuthenticated');
    navigate('/login');
  };

  return(
    <>
      <section className="containerAdmin"> 
      <div className="containerAdmin-header">
        <h1>¡ Bienvenido, Admin !</h1>
        <h3>Lunes, 29 de septiembre</h3> 
        <h4>10:00 am</h4>
        <button onClick={handleLogout}> Cerrar Sesión </button>
      </div>
      <div className="containerAdmin-buttons">
        <ul>
          <li> 
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
          <li> 
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
