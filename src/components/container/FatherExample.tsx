import { useState } from "react";
import ChildExample from "../pure/ChildExample";

const FatherExample = () => {

    const [name, setName] = useState('Gil')
    const [surname, setSurname] = useState('González')

    function showMessage(text:string ){
        alert(`Message received: ${text}`)
    }
    function updateName(newName :string){
        setName(newName)
    }
    function updateSurName(newSurname:string){
        setSurname(newSurname)
    }
  return (
    <div
      style={{
        backgroundColor: "#34AA10",
        padding: "10px",
        color: "white",
        border: "3px solid green",
        borderRadius: "5px",
      }}
    >
      <h5>Father Component: {name} {surname}</h5>
      <ChildExample name={name} send={showMessage} updateName={updateName} updateSurname={updateSurName} />
    </div>
  );
};

export default FatherExample;
