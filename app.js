require('colors')

const {showMenu, pause} = require('./helpers/menu')

const main = async () => {
 
    let opt = ''
    
    do {
        opt = await showMenu()
        
        await pause()
    }
    while ( opt !== "0")

}

main()