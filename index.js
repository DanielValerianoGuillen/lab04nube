const express = require('express')


const app = express()
const port = 9000


const clientes = ["Clientes", {
    nombre: "Daniel",
    apellido: "Valeriano",
    carrera: "Diseño Desarrollo Software",
    edad: "20"
}, {
        nombre: "Lemer",
        apellido: "Guillen",
        carrera: "Ingeniero Software",
        edad: "20"
    }, {
        nombre: "Isaud",
        apellido: "Almirante",
        carrera: "Ingeniero de Sistema",
        edad: "20"
    }

]
const productos = ["Productos",
    {
        nombre: "Martillo",
        cantidad: 14,
        costo: 15.60
    }, {
        nombre: "Destornillador",
        cantidad: 25,
        costo: 10.50
    }, {
        nombre: "Llave Francesa",
        cantidad: 30,
        costo: 38.80
    }]


app.get('/', (req, res) => {
    res.send("Bienvenido a mi pagina web ")
})


app.get('/clientes', (req, res) => {
    res.json(clientes)
})

app.get('/productos', (req, res) => {
    res.json(productos)
})

app.listen(port, () => {
    console.log(`esta corriendo en puerto ${port}`)
})