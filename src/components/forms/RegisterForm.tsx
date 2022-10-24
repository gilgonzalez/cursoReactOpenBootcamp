import React, { useState } from "react";

const RegisterForm = () => {
  const initialData = [
    {
      user:'',
      name:'',
      email: '',
      password:'',
    },
  ];
  const [data, setData] = useState(initialData)
  return (
    <div>
      <h1>Formulario Registro</h1>
    </div>
  );
};

export default RegisterForm;
