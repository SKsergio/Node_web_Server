const {envs} = require('./config/env');
const {StartServer} = require('./server/server')

const main =() =>{
    StartServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//funcion agnostica autoconvocada
(async () => {
    main()
})()
