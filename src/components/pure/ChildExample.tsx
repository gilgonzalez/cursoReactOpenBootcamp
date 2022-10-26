import {   useRef } from "react";

interface Props {
  name: string,
  send: (mensaje:string)=>void,
  updateName: (name:string)=> void
  updateSurname: (surname:string)=> void

}

const ChildExample = ({ name, send, updateName, updateSurname }: Props) => {

  const messageToFather = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const surnameRef = useRef<HTMLInputElement>(null)

  function pressButton() {
    alert("Default text");
  }

  function pressButtonParams(text: string) {
    alert(`Text: ${text}`);
  }
  function submitForm(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    updateName(nameRef.current!.value);
    updateSurname(surnameRef.current!.value);

  }
  return (
    <div
      onMouseOver={() => {console.log("On Mouse Over");}}
      style={{backgroundColor:'tomato', padding:'20px', border:'2px solid red'}}
    >
      <p>Child Component: {name} </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => pressButtonParams("hola")}>Botón 1</button>
        <button onClick={pressButton}>Botón 2</button>
        <button onClick={()=> send(messageToFather.current!.value)}>Enviar mensaje al padre</button>
        <input
          ref={messageToFather}
          type="text"
          placeholder="Insert a text"
          onFocus={() => {console.log("input focuseado");}}
          onChange = { (event)=> {console.log('Input changed :', event.target.value)}}
          onCopy = { (event)=> {console.log('Input copied :', event.currentTarget.value)}}
        />
      </div>
      <div style={{marginTop:'20px'}}>
          <h3>Formulario</h3>
          <hr />
          <form onSubmit={submitForm}>
            <div className="row">
              <div className="col-4">
                <input type="text" placeholder="New Name" ref={nameRef}/>
              </div>
              <div className="col-4">
                <input type="text" placeholder="New Surname" ref={surnameRef} />
              </div>
              <div className='col-4'>
                <button type='submit' style={{marginLeft:'1rem'}}>Update Data</button>
              </div>
            </div>
          </form>
      </div>
    </div>
  );
};

export default ChildExample;
