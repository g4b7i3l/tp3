const fs = require("fs");

const tareasJson = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8')); 

const tareas = {
    guardarTarea: function (tareas) {
        fs.writeFileSync("./tareas.json", JSON.stringify(tareas,null,2), "utf-8");
    },

    verCartel: function (mensaje) {
        console.log("----------------------");
        console.log(mensaje);
        console.log("----------------------");
    },

    crearTarea: function (tarea,estado="Pendiente") {
        let nuevaTarea = {
            tarea,
            estado
        }
        tareasJson.push(nuevaTarea)
        this.verCartel("Se ha agregado correctamente")
        this.guardarTarea(tareasJson)
    },

    leerJson: function () {
        tareas.forEach(tarea => {
            console.log(tareas);
        })
    },
    filtrarPorEstado: function () {
        let tareasFiltradas = tareasJson.filter(titulo => titulo.estado === "Pendiente");
        return console.log(tareasFiltradas);
     
    }
    
  

}

module.exports = tareas
