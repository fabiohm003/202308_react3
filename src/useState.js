import React from 'react';



const SECURITY_CODE = 'paradigma';


export function UseState ({name}){


  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });


  const onConfirm = () => {
    setState({
      ...state, 
      error: false, 
      loading: false, 
      confirmed: true
    });
  };

  const onError = () => {
    setState({
      ...state, 
      error: true, 
      loading: false
    });
  };


  const onWrite = (valor) => {
    setState({
      ...state, 
      value: valor,
    });
  };

  const onCheck = () => {
    setState({
      ...state, 
      error: false, 
      loading: true
    });
  }; 


  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    });
  };


  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: '',
      });
  };




  console.log('value:', state.value);


  React.useEffect(() => {

    console.log("empezar efecto");

    if (!!state.loading){

      setTimeout(() => {

        console.log("Realizando validación");

  
        if (state.value === SECURITY_CODE){
          onConfirm();
          console.log("Igualdad");
        } else {
          onError();
        }

        
        console.log("Terminando validación");
      }, 3000);
 
    }


    console.log("terminar efecto");

  }, [state.loading]);





  if (!state.deleted && !state.confirmed){

    return (
      <div>
        <h2>eliminar {name}</h2>
        <p>Escribe el código de seguridad</p>
  
        {state.error && (
          <p>el código es incorrecto</p>
        )}
  
        {state.loading && (
          <p>Cargando...</p>
        )}
  
        <input 
          placeholder='Código de seguridad (useState)'
          value={state.value} 

          onChange={(event)=>{
            onWrite(event.target.value);
          }}
        />
  
  
        <button
        onClick={()=>{
          onCheck();
        }}
        >Comprobar</button>
      </div>
    );

  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Solicitud de confirmación</p>
        <button
        onClick={() => {
          onDelete();
        }} 

        >si - eliminar</button>
        <button
          onClick={() => {
            onReset();
          }} 
        >no - cancelar</button>
      </>
    );

  } else {

    return (
      <>
        <p>Eliminado con éxito</p>
        <button
        onClick={() => {
          onReset();
        }}
        >Regresar</button>
      </>
    );

  }


}

