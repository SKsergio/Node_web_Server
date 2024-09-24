// const {envs} = require('./config/env');
// const {StartServer} = require('./server/server')

import { envs } from './config/env.js';
import { StartServer } from './server/server.js';

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
