import React from 'react';



const initialState = {

  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,

}


const actionTypes = {
  confirm: 'CONFIRM',
  error: 'ERROR',
  check: 'CHECK',
  write: 'WRITE',
  delete: 'DELETE',
  reset: 'RESET',
};








//opc3
const reducerObject = (state, payload) => {

  return {
    [actionTypes.confirm]: {
      ...state, 
      error: false, 
      loading: false, 
      confirmed: true
    }, 
    
    [actionTypes.error]: {
      ...state,
      error: true,
      loading: false,
    },

    [actionTypes.check]: {
      ...state, 
      error: false, 
      loading: true
    }, 

    [actionTypes.write]: {
      ...state, 
      value: payload,
    }, 

    [actionTypes.delete]: {
      ...state,
      deleted: true,
      }, 


    [actionTypes.reset]: {
      ...state,
      confirmed: false,
      deleted: false,
      value: '',
    }, 

  }

}




const reducer = (state, action) => {

  if(reducerObject(state)[action.type]){
    return reducerObject(state, action.payload)[action.type]
  } else {
    return state;
  }

}








const SECURITY_CODE = 'paradigma';



export function UseReducer ({ name }){



  const [state, dispatch] = React.useReducer(reducer, initialState);



  console.log('value:', state.value);



  const onConfirm = () => {
    dispatch({type: actionTypes.confirm });
  };
  
  const onError = () => {
    dispatch({type: actionTypes.error });
  };
  
  const onWrite = (valor) => {
    dispatch({type: actionTypes.write, payload: valor });
  };
  
  const onCheck = () => {
    dispatch({type: actionTypes.check });
  }; 
  
  const onDelete = () => {
    dispatch({type: actionTypes.delete });
  };
  
  const onReset = () => {
    dispatch({type: actionTypes.reset });
  };
  
  










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
  
  
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );

  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Solicitud de confirmación</p>
        <button onClick={onDelete}>si - eliminar</button>
        <button onClick={onDelete}>no - cancelar</button>
      </>
    );

  } else {

    return (
      <>
        <p>Eliminado con éxito</p>
        <button onClick={onReset}>Regresar</button>
      </>
    );

  }

}





