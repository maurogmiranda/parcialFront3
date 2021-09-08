import React from "react";
import Opcion from "./opcion";
import Recordatorio from "./recordatorio"
import Data from "./data.json"


class Historia extends React.Component{
constructor(props){
    super(props)

    this.state = {
        paso:1,
        contenido: Data[0].historia,
        eleccionAnterior:"",
        listaDeElecciones:[],
        opcionA: Data[0].opciones.a,
        opcionB:Data[0].opciones.b}

    this.handleChangeBotonA = this.handleChangeBotonA.bind(this)
    this.handleChangeBotonB = this.handleChangeBotonB.bind(this)
}

handleChangeBotonA() {
    let nuevoPaso = this.state.paso +1
    if(nuevoPaso<=5){
        let siguienteHistoria = Data.filter(data=> data.id ===nuevoPaso+"a")[0]
        
        this.setState({paso: nuevoPaso,
            eleccionAnterior:"A",
            contenido:siguienteHistoria.historia,
            opcionA:siguienteHistoria.opciones.a,
            opcionB:siguienteHistoria.opciones.b} )
        if(nuevoPaso>2){
            let nuevaListaElecciones = [...this.state.listaDeElecciones,this.state.eleccionAnterior]
            this.setState({
                listaDeElecciones:nuevaListaElecciones})
        }
    }else{
        alert("Fin")
    }
}

handleChangeBotonB(){
    let nuevoPaso = this.state.paso+1
    if(nuevoPaso<=5){
        let siguienteHistoria = Data.filter(data=> data.id ===nuevoPaso+"b")[0]
        this.setState({paso:nuevoPaso,
            eleccionAnterior:"B",
            contenido:siguienteHistoria.historia,
            opcionA:siguienteHistoria.opciones.a,
            opcionB:siguienteHistoria.opciones.b} )
        if(nuevoPaso>2){
            let nuevaListaElecciones = [...this.state.listaDeElecciones,this.state.eleccionAnterior]
            this.setState({
                listaDeElecciones:nuevaListaElecciones})
        }
    }else{
        alert("Fin")
    }
}

render(){
    return (
        <> 
        <h1 className="historia">{this.state.contenido}</h1>
        <div className= "opciones">
        <Opcion handleClick={this.handleChangeBotonA} opcion = {this.state.opcionA}>A</Opcion>
        <Opcion handleClick={this.handleChangeBotonB} opcion = {this.state.opcionB}>B</Opcion>
        </div>
        <Recordatorio eleccionAnterior={this.state.eleccionAnterior} listaElecciones={this.state.listaDeElecciones.map((eleccion,index)=><li key={eleccion + index}>{eleccion}</li>)} />
        </>
    )
}

}

export default Historia

