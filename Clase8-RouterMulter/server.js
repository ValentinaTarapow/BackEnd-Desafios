const express = require('express')
const router = express.Router()
const Products = require("./class/products")

const PORT = 8080

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended: true}))
app.use('/api/products', router)
app.use(express.static("./public"))

const productos = new Products()

router.get("/", (req, res) => {
    try {
        res.status(200).json(productos.productsAll) 
    }catch(e){
        res.status(500).json(e.message) 
    }
})

router.get("/:idProduct", (req, res) => {
    try {
        const product = productos.getProductById(req.params.idProduct)
        if(product){
            return res.status(200).json(product)
        } 
        return res.status(200).json({error: "Product not found"})
    }catch(e){
        res.status(500).json(e.message)
    }
})

router.post("/", (req, res) => {
    try {
        if(req.body.title && req.body.price){
            const product = productos.saveProduct(req.body)
            res.status(201).json(product) 
        }else{
            res.status(400).json({error: "Please fill all the mandatory fields"})  
        }
    }catch(e){
        res.status(500).json(e.message)
    }
})

router.put("/:idProduct", (req, res) => {
    try {
        const id = Number(req.params.idProduct)
        const producto = productos.update(id, req.body)
        res.status(200).json(producto)
    }catch(e){
        res.status(`Could not be edited ${e.message}`)
    }
})

router.delete("/:idProduct", (req, res) => {
    try {
        const id = Number(req.params.idProduct);
        productos.deleteById(id);
        res.status(200).json("Borrado")
    }catch(e){
        res.status(500).json({error: `Could not be deleted ${e.message}`})
    }
})

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
server.on("error", (e) => console.log(e.message))