const Task = require('./task')

class Tasks {

    _listado = {}

    get listadoArr() {
        
        const listado = []
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        }) 

        return listado
    }

    constructor(){
        
        this._listado = {}

    }
    
    createTask(desc = '') {
        const task = new Task(desc)
        this._listado[task.id] = task
    }

    deleteTask( id = '' ) {
        if ( this._listado[id] ) {
            delete this._listado[id]
        }
    }

    loadTasksFromArray(tasks = []){

        tasks.map( t => {
            this._listado[t.id] = t
        })

        return true

    }

    listAllTasks() {

        console.log()
        
        this.listadoArr.forEach( (t ,i) => {

            const index = String(i + 1).green
            const desc = t.desc
            const state = (t.completed)? "Done".green : "Pending".red;
            const date = (t.date)? t.date.blue : '';

            console.log(`${index} ${desc} :: ${state} :: ${date}`)
        })
    }

    showTasksByState(state = true) {

        this.listadoArr.filter(t => t.completed === state).forEach((t ,i) => {

            const index = String(i + 1).green
            const desc = t.desc
            const state = (t.completed)?"Done".green:"Pending".red;

            console.log(`${index} ${desc} :: ${state}`)
        })

    }

    toggleCompleted( ids = []) {

        ids.forEach(id => {

            const task = this._listado[id]

            if ( !task.completed ) {
                task.completed = true
                task.date = new Date().toISOString()
            }
        })

        this.listadoArr.forEach( t => {

            if ( !ids.includes(t.id) ) {
                this._listado[t.id].completed = false
                this._listado[t.id].date = null
            }
            
        })
    }
}

module.exports = Tasks