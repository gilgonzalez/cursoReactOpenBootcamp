/**
 * Componente que va a contener un formulario para autentificación de usuarios
 */

import React, { useState } from "react";

const LoginForm = () => {
  const initialCredentials = [
    {
      user: "",
      password: "",
    },
  ];

  const [credentials, setCredentials] = useState(initialCredentials);
  return (
    <div>
      <h1>Formulario</h1>
    </div>
  );
};

export default LoginForm;
