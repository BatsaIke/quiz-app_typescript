// src/components/Signup.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Alert from '../UI/Alert';
import './Login.css'
import { registerUser } from '../api/api'; // Import the registerUser function

interface FormData {
  name:string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  const [alert, setAlert] = useState<{ message: string; type: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
       await registerUser(formData); // Use the registerUser function
      setAlert({ message: 'Signup successful!', type: 'success' });
      navigate('/');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error(error.message);
      setAlert({ message: 'Error signing up', type: 'error' });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          {alert && <Alert message={alert.message} type={alert.type} />}
          <span className="button__text">Sign up now</span>
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="login__input"
                placeholder="user Name"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="login__input"
                placeholder="Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button className="button login__submit" type="submit">
              <span className="button__text">Sign up</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
            <button className="button login__submit">
              <Link to="/">
                <span className="button__text">or Sign in here</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </Link>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
