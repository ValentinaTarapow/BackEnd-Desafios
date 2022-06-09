class cUser{
    constructor(name, surname, books, pets){
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    }

    getFullName(){
        return `'${this.name} ${this.surname}'`;
    }

    addPet(petName){
        this.pets.push(petName);
    }

    countPets(){
        return this.pets.length;
    }

    addBook(bookName, author){
        this.books.push({ title: bookName, author:  author});
    }

    getBookNames(){
        const booksNames = this.books.map(function (book) {
            return book.title
        });

        return booksNames;
    }
}


const myUser = new cUser('Valentina', 'Tarapow' , [{title: 'Estudio en escarlata', author: 'Arthur Conan Doyle' }], ['Piku', 'Mikey'] );

console.log(myUser.getFullName())
console.log(myUser.countPets())
myUser.addPet('Suki')
console.log(myUser.countPets())
console.log(myUser.getBookNames())
myUser.addBook('Maus', 'Art Spiegelman')
console.log(myUser.getBookNames())