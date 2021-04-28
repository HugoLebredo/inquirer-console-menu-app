require('colors')

const showMenu = () => {
    
    console.clear()

    console.log(`=========================`.cyan)
    console.log(`      Select Option      `)
    console.log(`=========================`.cyan)
    console.log(`${"1".green} Nueva Tarea`)
    console.log(`${"2".green} Nueva Tarea`)
    console.log(`${"3".green} Nueva Tarea`)
    console.log(`${"4".green} Nueva Tarea`)
    console.log(`${"5".green} Nueva Tarea`)
    console.log(`${"6".green} Nueva Tarea`)
    console.log(`${"7".green} Nueva Tarea`)
    console.log(`${"0".green} Nueva Tarea`)

}

module.exports = {showMenu}