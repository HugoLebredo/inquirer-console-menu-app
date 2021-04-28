require('colors')

const {showMenu} = require('./helpers/menu')

const main = async () => {
    try{
        console.log("hola mundo")
        showMenu()
    }

    catch{
        throw err
    }
}

main()