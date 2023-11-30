// App.jsx
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';

function App() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isWelcomeTextVisible, setWelcomeTextVisible] = useState(true);

  const handleLoginClick = () => {
    setLoginFormVisible(true);
    setWelcomeTextVisible(false);
  };

  const handleLoginFormClose = () => {
    setLoginFormVisible(false);
    setWelcomeTextVisible(true);
  };

  return (
    <div>
      <Header onLoginClick={handleLoginClick} />

      <h1>LEGOCARS</h1>
      <div className="card">
        <p className={`welcome-text ${isWelcomeTextVisible ? 'visible' : ''}`}>
          ¡Bienvenido al emocionante mundo de las competiciones de legocars en Radiador Spring! Descubre la adrenalina de las carreras de automóviles de Lego y forma parte de la acción.
        </p>

        {isLoginFormVisible && (
          <LoginForm onClose={handleLoginFormClose} />
        )}
      </div>
      

      <Footer />
    </div>
  );
}

export default App;


