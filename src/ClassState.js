import React from 'react';


const SECURITY_CODE = 'paradigma';


export class ClassState extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      value: '',
      error: false,
      loading: false,
    };
  }
  


  UNSAFE_componentWillMount(){
    console.log("componentWillMount");
  }
  /*montar componente: 1er metodo que se ejecuta cuando se usa React.Component, y cuando se hace render por 1vez*/


  componentDidMount(){
    console.log("componentDidMount");
  }
  /*Componente montado: ultimpo metodo que se ejecuta cuando se usa React.Component, y cuando se hace render por 1vez*/


  componentDidUpdate() {
    console.log("componentDidUpdate");

    if (!!this.state.loading){

      setTimeout(() => {
        console.log("componentDidUpdate: Realizando validación");
  


        if (this.state.value === SECURITY_CODE){
          console.log("Igualdad");
          this.setState( { error: false, loading: false } );
        } else {
          this.setState( { error: true, loading: false } );
        }



  
        console.log("componentDidUpdate: Terminando validación");
      }, 3000);
 
    }

  }
  /*Componente actualizado: se ejecuta cuando se identifica alguna actualizacion en el render*/


  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  /*se aplica cuando se des-renderiza el componente; un ejemplo puede ser cuando se tiene una condicion en donde se desea mostrar/ocultar un objeto por pantalla; al ocultar el objeto, se des-renderiza; al mostrar, se renderiza*/






  render (){


    console.log('value:', this.state.value);

    return (
      <div>
        <h2>eliminar {this.props.name}</h2>
        <p>Escribe el código de seguridad</p>


        {this.state.error && (
          <p>el código es incorrecto</p>
        )}



        {this.state.loading && (
          <p>Cargando....</p>
        )}

        <input 
          placeholder='Código de seguridad'
          value={this.state.value}
          onChange={(event) => {
            this.setState( { value: event.target.value } );
          }}
        />


        <button

        onClick={()=>{
          this.setState( { error: false, loading: true } );
        }}
        
        >Comprobar</button>
      </div>
    );
  }

}

//export {ClassState};
