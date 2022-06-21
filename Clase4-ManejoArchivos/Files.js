const fs = require('fs');

class cContainer{
    constructor(fileName){
        this.fileName = fileName;
    }
    
    async save(saveObject){
        try{
            const response = await fs.promises.readFile(this.fileName, 'utf-8');
            // si el archivo esta vacio, le pongo id 1 y creo un array de productos
            if(response == ""){
                saveObject.id = 1;
                const prodArray = [saveObject];
                await fs.promises.appendFile(this.fileName, JSON.stringify(prodArray));
            } else{
                const data = JSON.parse(response);
                saveObject.id = data[data.length - 1].id + 1;
                data.push(saveObject);
                await fs.promises.writeFile(this.fileName , JSON.stringify(data));
            }

            return (`Saved succesfully : ${saveObject.id}`);
        }
        catch(error){
            console.log(`save error: ${error}`);
        }
    }

    async getById(id) {
        try{
            const response = await fs.promises.readFile(this.fileName, 'utf-8');
            const data = JSON.parse(response);
            const result = data.find(prod => prod.id == id)
            return(`getById (${id}): ${result}`)
        }
        catch(error){
            console.log(`getById error: ${error}`);
        }
    }

    async getAll(){
        try{
            const response = await fs.promises.readFile(this.fileName, 'utf-8');
            const data = JSON.parse(response);
            return(data);
        }
        catch(error){
            console.log(`getAll error: ${error}`);
        }
    }

    async deleteById(id){
        try {
            const response = fs.readFileSync(this.fileName, 'utf-8')
            const data = JSON.parse(response);
            const objFound = data.findIndex(prod => prod.id == id);

            if(objFound < 0){
                console.log(`Product ${id} can not be deleted because it does not exist`);
            } else if (objFound >= 0 ){
                const filteredArray = data.filter(prod => prod.id !== id)
                await fs.promises.writeFile(this.fileName, JSON.stringify(filteredArray));
                console.log(`Product ${id} deleted successfully`);
            }
        } catch (error) {
            console.log(`deleteById error: ${error}`);
        }
    }

    async deleteAll(){
        try{
            await fs.promises.writeFile(this.fileName, "");
            console.log('All products have been deleted successfully');
        }
        catch(error){
            console.log(`deleteAll error: ${error}`)
        }
    }


}
//-----------Creating container and products-----------
    const myContainer = new cContainer('./products.json')

    const exampleProd1 = {
        title: 'MK Phantom Blade',
        price: 200,
        thumbnail: 'https://dummyimage.com/300x300/000/fff'
    }

    const exampleProd2 = {
        title: 'Jackson Ultima Elite Blade',
        price: 150,
        thumbnail: 'https://dummyimage.com/300x300/000/fff'
    }

    const exampleProd3 = {
        title: 'Edea Piano Boots',
        price: 250,
        thumbnail: 'https://dummyimage.com/300x300/000/fff'
    }
//------------------------------


//-----------Test-----------

setTimeout(()=> {myContainer.save(exampleProd1)}, 100);
setTimeout(()=> {myContainer.save(exampleProd2)}, 200);
setTimeout(()=> {myContainer.save(exampleProd3)}, 300);
setTimeout(()=> {myContainer.getById(3)}, 400);
setTimeout(()=> {myContainer.getAll()}, 500);
setTimeout(()=> {myContainer.deleteById(1)}, 600);
//setTimeout(()=> {myContainer.deleteAll()}, 700);
