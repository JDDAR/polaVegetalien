import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine, RiUserLine } from "react-icons/ri";
import apiClient from "../../services/api";
import './login.scss'

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => { 
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await apiClient.post('/login', {
        username,
        password,
      });
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin');
    } catch (err) {
      if (err.response) { 
        setError(err.response.data.message || 'Error al iniciar sesión.');
      } else { 
        setError('No se pudo conectar con el servidor.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-brand">Le Vegetalien</h1>
          <p className="login-subtitle">Acceso de Administrador</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <div className="input-wrapper">
              <RiUserLine className="input-icon" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
                autoComplete="username"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-wrapper">
              <RiLockPasswordLine className="input-icon" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
                autoComplete="current-password"
              />
            </div>
          </div>

          {error && (
            <div className="error-message">
              <span>⚠️</span>
              <p>{error}</p>
            </div>
          )}

          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>

        <div className="login-footer">
          <p>Sistema POS - Le Vegetalien © 2025</p>
        </div>
      </div>
    </div>
  );
}
