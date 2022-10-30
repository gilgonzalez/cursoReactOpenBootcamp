import React, { useState } from "react";

/**LOGIN LOGOUT BUTTONS */

interface LoginProps {
  loginAction: () => void;
}
interface LogOutProps {
  logOutAction: () => void;
}

const LoginButton = (props: LoginProps) => {
  return (
    <button
      style={{ backgroundColor: "green", color: "white" }}
      onClick={props.loginAction}
    >
      Login
    </button>
  );
};
const LogOutButton = (props: LogOutProps) => {
  return (
    <button
      style={{ backgroundColor: "red", color: "white" }}
      onClick={props.logOutAction}
    >
      Logout
    </button>
  );
};
{
  /**COMPONENTE QUE SE VA A RENDERIZAR */
}
const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  const [message, setMessage] = useState(0);

  //unread messages
  let addMessages = () => {
    setMessage(message + 1);
  };

  const loginAction = () => {
    setAccess(true);
  };
  const logOutAction = () => {
    setAccess(false);
    console.log("logout...");
  };

  return (
    <div>
      {/**LOGIN || LOGOUT BUTTON */}
      {access ? (
        <LogOutButton logOutAction={logOutAction} />
      ) : (
        <LoginButton loginAction={loginAction} />
      )}
      {access && (
        <div style={{ marginTop: "5px" }}>
          {message > 1 && <p>Hay {message} mensaje/s</p>}
          {message === 1 && <p>Hay {message} mensaje</p>}
          {message <= 0 && <p>No tienes mensajes nuevos</p>}
          <button onClick={() => addMessages()}>Incrementar mensajes</button>
          <button onClick={() => setMessage(0)}>Quitar mensajes</button>
        </div>
      )}
    </div>
  );
};

export default OptionalRender;
