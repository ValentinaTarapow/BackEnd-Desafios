class Products{
    constructor(){
    this.products = [];
    this.id = 0;
    }  

    get productsAll() {
        try{
            return this.products;
        }catch(e){
            throw new Error(`Error: ${e.message}`);
        }
    }

    saveProduct(product){
        try{
            this.id ++
            const newProduct = {
                title: product.title,
                price: product.price,
                thumbnail: "https://via.placeholder.com/150",
                id: this.id
            };
            this.products.push(newProduct)
            return newProduct;
        }catch(e){
            throw new Error(`saveProduct error: ${e.message}`)
        }
    }

    getProductById(idProduct){
        try {
            return this.products.find(product => product.id == idProduct);
        }catch(e) {
            throw new Error(`getProductById error: ${e.message}`);
        }
    }

    update(id, body){
        const product = {
            title: body.title,
            price: body.price,
            thumbnail: "https://via.placeholder.com/150",
            id: id
        } ;
        const updateIndex = this.products.findIndex((producto) => producto.id == id);
        if(updateIndex === -1){
            console.log("ID not found");
            return("ID not found");
        } else{
            this.products[updateIndex] = product;
            console.log(product);
            return product;
        };
        
    }

    deleteById(id) {
        try {
            const deleteIndex = this.products.findIndex((product) => product.id === id);
            console.log(deleteIndex)
            if (deleteIndex === -1 ){
                console.log("ID not found");
            } else{
                const deleteData = this.products.splice(deleteIndex,1);
                console.log("ID deleted");
                console.log(deleteData);
            }
        } catch (error) {
            console.log("Error " + error);
        }
    }
}

module.exports = Products;