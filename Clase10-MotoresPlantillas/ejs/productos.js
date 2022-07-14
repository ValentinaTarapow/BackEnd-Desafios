class Productos {
	productos = [
		{
			title: 'Strawberry',
			price: 10,
			thumbnail:
				'https://cdn4.iconfinder.com/data/icons/fruits-79/48/02-Strawberry-1024.png',
			id: 1,
		},
		{
			title: 'Apple',
			price: 8,
			thumbnail:
				'https://cdn4.iconfinder.com/data/icons/fruits-79/48/04-apple-1024.png',
			id: 2,
		},
        {
			title: 'Grape',
			price: 7,
			thumbnail:
				'https://cdn4.iconfinder.com/data/icons/fruits-79/48/23-grape-1024.png',
			id: 3,
		},
	];

	generateId() {
		const lastProduct = this.productos[this.productos.length - 1];
		console.log(lastProduct);
		let id = 1;
		if (lastProduct) {
			id = lastProduct.id + 1;
		}

		return id;
	}

	addProduct(newData) {
		newData.id = this.generateId();

		this.productos.push(newData);

		return this.productos;
	}

	getById(id) {
		return this.productos.find(product => product.id === parseInt(id));
	}

	update(id, data) {
		let updatedProduct;

		const updatedProducts = this.productos.map(product => {
			if (product.id === parseInt(id)) {
				product = Object.assign(product, data);

				updatedProduct = product;
			}
			return product;
		});

		this.productos = updatedProducts;

		return updatedProduct;
	}

	getAll() {
		return this.productos;
	}

	deleteById(id) {
		const newProducts = this.productos.filter(
			product => product.id !== parseInt(id)
		);

		this.productos = newProducts;

		return this.productos;
	}
}

module.exports = Productos;