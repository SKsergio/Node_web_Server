// const express = require('express')
// const path = require('path')

import express from 'express'
import path from 'path'

export const StartServer=(options)=>{
    const {port, public_path = 'public '} = options 
    
    const app = new express()
    //para utilizar middlewares se utiliza la palabra use(propio de NodeJs)
    app.use(express.static(public_path)) //contenido estatico disponible para su uso

    //almacenar la peticion que nos hagan al servidor
    app.get('*',(req, res) =>{
        const IndexPath =path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(IndexPath);
    })

    app.listen(port, ()=>{
        console.log(`Escuchando el puerto ${port}`);
        
    })
}
