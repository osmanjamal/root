import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { login } from '../../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await login(email, password);
      setAuthState({ token: data.token, isAuthenticated: true });
      navigate('/');
    } catch (error) {
      console.error('خطأ في تسجيل الدخول:', error);
      setError('فشل تسجيل الدخول. يرجى التحقق من بريدك الإلكتروني وكلمة المرور.');
    }
  };

  return (
    <div className="login-container">
      <h2>تسجيل الدخول</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">كلمة المرور:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">دخول</button>
      </form>
    </div>
  );
};

export default Login;