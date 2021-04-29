require('colors')

const showMenu = () => {
    
    console.clear()
    
    return new Promise((resolve) => {    
        

        console.log(`===========================`.cyan)
        console.log(`\tSelect Option`)
        console.log(`===========================`.cyan)
        console.log(`\t${"1".green} New Task`)
        console.log(`\t${"2".green} Nueva Tarea`)
        console.log(`\t${"3".green} Nueva Tarea`)
        console.log(`\t${"4".green} Nueva Tarea`)
        console.log(`\t${"5".green} Nueva Tarea`)
        console.log(`\t${"6".green} Nueva Tarea`)
        console.log(`\t${"7".green} Nueva Tarea`)
        console.log(`\t${"0".green} Exit\n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Select an Option: ',(opt) => {
            resolve(opt)
            readline.close()
        }
    )})
}


const pause = () => {

    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`Push ${'Enter'.green} to continue`,() => {
            readline.close()
            resolve()
        })
    })
}


module.exports = {showMenu, pause}