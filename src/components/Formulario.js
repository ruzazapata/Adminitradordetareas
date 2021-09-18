import React, {useState} from 'react';

const Formulario = () => {
    
    //Crea State de Tareas 
    const [tarea, actualizarTarea] = useState ({
        nombre: '',
        apellido:'',
        fecha: '',
        hora: '',
        realizartarea: ''
    })
   
    //const [ error, actualizarError ] = useState(false)
    
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
           }

        //validar el formulario
         // || los pipes significa "o" y comprueba que se vaya cumpliendo cada una u otra
        if(nombre.trim() === '' || apellido.trim() === '' || fecha.trim() === '' || hora.trim() === '' || realizartarea.trim() === ''){
            //actualizarError(true)
            return;
        }

        console.log('Agregando...')

        //Asignar una Id 



        //Crear una tarea



        //Reiniciar el formulario



    return ( 
        <>
        
        <h2> Crear tareas</h2>

        <form
        onSubmit = {submitTarea}
        >
            <label> Nombre </label>
            <input
            type = "text"
            name = "nombre"
            className = "u-full-widh"
            placeholder = "Nombre de la persona"
            onChange =  {actualizarState}
            value = {nombre}
            >

            </input>

            <label> Apellido </label>
            <input
            type = "text"
            name = "apellido"
            className = "u-full-widh"
            placeholder = "Apellido de la persona"
            onChange =  {actualizarState}
            value = {apellido}
            >
                
            </input>

            <label> Fecha </label>
            <input
            type = "date"
            name = "fecha"
            className = "u-full-widh"
            onChange =  {actualizarState}
            value = {fecha}
            >
                
            </input>

            <label> Hora </label>
            <input
            type = "time"
            name = "hora"
            className = "u-full-widh"
            onChange =  {actualizarState}
            value = {hora}
            >
                
            </input>

            <label> Tarea a Realizar </label>
            < textarea
            name = "realizartarea"
            className = "u-full-widh button-primary"
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