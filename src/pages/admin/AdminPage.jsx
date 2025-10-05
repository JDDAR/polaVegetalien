import React, { useState, useEffect } from 'react';
import {
  RiBookOpenLine,
  RiShoppingCartLine,
  RiRestaurantLine,
  RiTeamLine,
  RiBox3Line,
  RiBook2Line,
} from 'react-icons/ri';
import './adminPages.scss';

const AdminPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const quickActions = [
    { id: 1, title: 'Menú', icon: RiBookOpenLine, subtitle: 'Gestionar productos y categorías'   },
    { id: 2, title: 'Ventas', icon: RiShoppingCartLine, subtitle: 'Crear nueva orden de venta' },
    { id: 3, title: 'Mesas', icon: RiRestaurantLine,  subtitle: 'Ver disponibilidad' },
    { id: 4, title: 'Usuarios', icon: RiTeamLine, subtitle: 'Administrar personal'},
    { id: 5, title: 'Inventario', icon: RiBox3Line, subtitle: 'Control de stock' },
    { id: 6, title: 'Recetas', icon: RiBook2Line, subtitle: 'Base de conocimiento'},
  ];

   const formatTime = (date) => {
     return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
   };

   const formatDate = (date) => {
     return date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
   };

   return (
     <div className="containerAdmin">
       <div className="containerAdmin-header">
         <div className="containerAdmin-header-title">
           <h1>
             Hola, <span>Admin</span>
           </h1>
           <h3>{formatDate(currentTime)}</h3>
         </div>
         <div className="containerAdmin-header-data">
           <h4>{formatTime(currentTime)}</h4>
           <h3>Hora actual</h3>
         </div>
       </div>
      <div className="containerAdmin-summary">
        {/* Aquí puedes agregar el contenido para el resumen de ventas, etc. */}
      </div>

       <div className="containerAdmin-buttons">
         <ul>
           {quickActions.map((action) => (
             <li key={action.id}>
               <span>
                 <action.icon />
               </span>
               <div className='info'>
                  <h2>{action.title}</h2>
                  <p>{action.subtitle}</p>
              </div>
             </li>
           ))}
         </ul>
       </div>

     </div>
   );
 };

export default AdminPage;
