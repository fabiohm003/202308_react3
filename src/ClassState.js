import React from 'react';



export class ClassState extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      error: false,
    };
  }



  render (){

    return (
      <div>
        <h2>eliminar {this.props.name}</h2>
        <p>Escribe el código de seguridad</p>


        {this.state.error && (
          <p>el código es incorrecto</p>
        )}


        <input placeholder='Código de seguridad' />
        <button
        onClick={()=>(
          this.setState( {error: !this.state.error} )
          )}
        /*prevState*/
        
        >Comprobar</button>
      </div>
    );
  }

}

//export {ClassState};
