import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  
  const navigate = useNavigate();

  const handleLogout = () => { 
    sessionStorage.removeItem('isAdminAuthenticated');
    navigate('/login');
  };

  return(
    <>
      <div style={{padding: '50px', textAlign: 'center'}}>
        <h1>¡ Bienvenido, Admin</h1>
        <p>Esta es tu pagina de administración. Desde aqui podrás gestionar el contenido</p>
        <button onClick={handleLogout}> Cerrar Sesión </button>
      </div>
    </>
  )

}

export default AdminPage;
