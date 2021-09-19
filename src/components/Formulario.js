import React, {useState} from 'react';
import  { v4 as uuidv4 } from 'uuid';
uuidv4();

const Formulario = ( {crearTarea} ) => {
    
    //Crea State de Tareas 
    const [tarea, actualizarTarea] = useState ({
        nombre: '',
        apellido:'',
        fecha: '',
        hora: '',
        realizartarea: ''
    })
   
    //State para capturar los errores
    const [ error, actualizarError ] = useState(false)
    
    //Funcion que se actualiza cada vez que el usuario escribe en un input
    const actualizarState  = e => {
        
        actualizarTarea({
            ...tarea, // express operation
        [e.target.name] : e.target.value
    })
    }

    // extraer los valores
    const  { nombre , apellido , fecha , hora , realizartarea }  =  tarea

    // Cuando el usuario preciones agregar tarea
    const submitTarea = (e) => {
        e.preventDefault(); // para que no aparezca lo largo del link
        console.log(nombre)
    
            //validar el formulario
         // || los pipes significa "o" y comprueba que se vaya cumpliendo cada una u otra
         if(nombre.trim() === '' || apellido.trim() === '' || fecha.trim() === '' || hora.trim() === '' || realizartarea.trim() === ''){
            actualizarError(true)
            return;
            }      

            //console.log('Agregando...')
            // eliminar el mensaje previo
            actualizarError(false)

            //Asignar una Id 
            tarea.id = uuidv4();
            console.log(tarea)

            //Crear una tarea
            crearTarea(tarea)
            
         //Reiniciar el formulario
         actualizarTarea({
            nombre: '',
            apellido: '',
            fecha: '',
            hora: '',
            realizartarea: ''
         })


        }
    return ( 
        <>
        
        <h2> Crear tareas</h2>
        { error ? <p className="alerta-error">Todos los campos son obligatrios</p> : null }

        <form
        className = "u-full-width"
        onSubmit = {submitTarea}
        >
            <label> Nombre </label>
            <input
            type = "text"
            name = "nombre"
            className = "u-full-width"
            placeholder = "Nombre de la persona"
            onChange =  {actualizarState}
            value = {nombre}
            >

            </input>

            <label> Apellido </label>
            <input
            type = "text"
            name = "apellido"
            className = "u-full-width"
            placeholder = "Apellido de la persona"
            onChange =  {actualizarState}
            value = {apellido}
            >
                
            </input>

            <label> Fecha </label>
            <input
            type = "date"
            name = "fecha"
            className = "u-full-width"
            onChange =  {actualizarState}
            value = {fecha}
            >
                
            </input>

            <label> Hora </label>
            <input
            type = "time"
            name = "hora"
            className = "u-full-width"
            onChange =  {actualizarState}
            value = {hora}
            >
                
            </input>

            <label> Tarea a Realizar </label>
            < textarea
            name = "realizartarea"
            className = "u-full-width button-primary"
            onChange =  {actualizarState}
            value = {realizartarea}
            >
            </textarea>

            <button
            type = "submit"
            className = "u-full-widh button-primary"
            >
                Apregar tarea
            </button>

        </form>
        
        </>
     );
}
 
export default Formulario;