import React, { useState, useEffect } from 'react';
import {
  RiBookOpenLine,
  RiShoppingCartLine,
  RiRestaurantLine,
  RiTeamLine,
  RiBox3Line,
  RiBook2Line,
} from 'react-icons/ri';

import { FiDollarSign, FiClock, FiTrendingUp } from "react-icons/fi";


import './adminPages.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/mainHome/footer';

const AdminPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

   const stats = [
    { label: 'Ventas Hoy', value: '$234,500', change: '+12.5%', trend: 'up', icon: FiDollarSign },
    { label: 'Órdenes Activas', value: '18', change: '6 pendientes', trend: 'neutral', icon: FiClock },
    { label: 'Productos Vendidos', value: '142', change: '+8.2%', trend: 'up', icon: FiTrendingUp },
  ];


  const quickActions = [
    { id: 1, title: 'Menú', icon: RiBookOpenLine, subtitle: 'Gestionar productos y categorías', path: '/admin/menu'  },
    { id: 2, title: 'Ventas', icon: RiShoppingCartLine, subtitle: 'Crear nueva orden de venta', path: '#' },
    { id: 3, title: 'Mesas', icon: RiRestaurantLine,  subtitle: 'Ver disponibilidad', path: '#'  },
    { id: 4, title: 'Usuarios', icon: RiTeamLine, subtitle: 'Administrar personal', path: '#'},
    { id: 5, title: 'Inventario', icon: RiBox3Line, subtitle: 'Control de stock',path: '#' },
    { id: 6, title: 'Recetas', icon: RiBook2Line, subtitle: 'Base de conocimiento', path: '#'},
  ];

   const formatTime = (date) => {
     return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
   };

   const formatDate = (date) => {
     return date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
   };

   return (
    <>
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
          {stats.map((stat, index) => (
            <div key={index} className="containerAdmin-summary-stats">
            <div className="containerAdmin-summary-stats-header">
              <div className="containerAdmin-summary-stats-header-icon">
                <stat.icon size={24} />
              </div>
              <span className={`containerAdmin-summary-stats-header-badge ${stat.trend === 'up' ? 'trend-up' : 'trend-neutral'}`}>
                {stat.change}
              </span>
            </div>
            <div className="containerAdmin-summary-stats-content">
              <div className="containerAdmin-summary-stats-content-value">{stat.value}</div>
              <div className="containerAdmin-summary-stats-content-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>       
      <div className="containerAdmin-buttons">
        <h3>Accesos Rapidos</h3>
         <ul>
           {quickActions.map((action) => (
             <li key={action.id}>
              <Link to={action.path}> 
               <span>
                 <action.icon />
                </span>
                <div className='info'>
                  <h2>{action.title}</h2>
                  <p>{action.subtitle}</p>
                </div>
              </Link>
             </li>
           ))}
         </ul>
       </div>
    </div>
    <Footer /> 

    </>
   );
 };

export default AdminPage;
