moduloTareas = require ('./tareas');
const process = require ("process");

const palabra2 = process.argv[2];

switch (palabra2) {
    case "crear":
        let tarea = process.argv[3];
        if(!tarea){
            console.log("Debes escribir una tarea");
        break;      
        }
        let estado = process.argv[4];
        moduloTareas.crearTarea(tarea,estado)
        break;
    case "filtrar":
        moduloTareas.filtrarPorEstado(process.argv[4])
        break;     

    default:
        break;
}