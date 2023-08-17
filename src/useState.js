import React from 'react';


export function UseState ({name}){

  const [error, setError] = React.useState(false);



  return (
    <div>
      <h2>eliminar {name}</h2>
      <p>Escribe el código de seguridad</p>

      {error && (
        <p>el código es incorrecto</p>
      )}


      <input placeholder='Código de seguridad' />

      <button
      onClick={()=>setError(!error)}
      >Comprobar</button>
    </div>
  );

}

