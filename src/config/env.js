import env from 'dotenv'
import envar from 'env-var'

env.config()

//Asignando propiedades a las variables de entorno
export const envs = {
    PORT : envar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH : envar.get('PUBLIC_PATH').default('public').asString()
}