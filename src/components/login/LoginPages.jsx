import { useState } from "react"
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/api";


export function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => { 
    e.preventDefault();
    setError('');
    
    try {
       await apiClient.post('/login' , {
        username,
        password,
      });

      sessionStorage.setItem('isAdminAuthenticated','true');
      navigate('/admin');

    } catch (err) {
      if(err.response) { 
        setError(err.response.data.message || 'Error al iniciar sesión.');
      } else { 
        setError('No se pudo conectar con el servidor.')
        }
      }
    };

  return(
    <>
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Acceso de Administrador</h2>
        <form onSubmit={handleLogin}>
        <div style={{ margin: '10px' }}>
        <input
           type="text"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           placeholder="Usuario"
           required
         />
         </div>
           <div style={{ margin: '10px' }}>
             <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Contraseña"
               required
             />
           </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Ingresar</button>
         </form>
       </div>
    </>
  );
}
