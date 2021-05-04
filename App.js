require('colors')

const { saveDB, readDB } = require('./helpers/manageFiles')
const { inquirerMenu, 
        pause, 
        readInput,
        readTasks,
        confirm,
        checkTasks
} = require('./helpers/inquirer')

const Tasks = require('./models/tasks')

const main = async () => {
 
    let opt = ''

    const tasks = new Tasks()

    const dataDB = readDB()

    if ( dataDB ) {
        tasks.loadTasksFromArray(dataDB)
    }
    
    do {

        opt = await inquirerMenu()
        
        switch(opt) {
            case '1':
                const desc = await readInput("Description: ")
                tasks.createTask( desc )
            break;

            case '2':
                tasks.listAllTasks()
            break;

            case '3':
                tasks.showTasksByState()
            break;

            case '4':
                tasks.showTasksByState(false)
            break;

            case '5':
                const ids = await checkTasks(tasks.listadoArr)
                tasks.toggleCompleted(ids)
            break;

            case '6':
                const id = await readTasks(tasks.listadoArr)

                if (id !== "0"){
                    const ok = await confirm("Do you want to remove this task?")
                    ok? tasks.deleteTask(id) : null;
                }
            break;
        }
        
        saveDB(tasks.listadoArr)
        
        await pause()
    }
    while ( opt !== "0")

    

}

main()