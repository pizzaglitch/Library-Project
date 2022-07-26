let myLibrary = []; 

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.readStatus = readStatus;
    
    this.bookInfo = function () {
        return ('Book Title: ' + title + ' by ' + author + '. Page count: ' + pages + '. Read status: ' + readStatus);
    }
    
};

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', '235', 'Have read');

console.log(theHobbit.bookInfo());

function addBookToLibrary() {

}