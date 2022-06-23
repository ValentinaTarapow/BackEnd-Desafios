const fs = require('fs');

class cContainer{
    constructor(fileName){
        this.fileName = fileName;
    }

    getAll = () => {
        try{
            const response = fs.readFileSync(this.fileName, 'utf-8');
            const data = JSON.parse(response);
            return data;
        } catch(error){
            console.log(`getAll error: ${error}`);
        }
    }

    getById = (id) => {
        const data = fs.readFileSync('./productos.json', 'utf-8')
        console.log('getById', JSON.parse(data).find(x => x.id === id))
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


module.exports = cContainer;