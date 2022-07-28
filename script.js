let myLibrary = []; 
const theAuctioneer = new Book('The Auctioneer', 'Joan Samson', '260', 'Have not read');
const theElementals = new Book('The Elementals', 'Michael McDowell', '230', 'Have not read');
const theHellboundHeart = new Book('The Hellbound Heart', 'Clive Barker', '186', 'Have not read');
const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', '235', 'Have read');
myLibrary.push(theAuctioneer, theElementals, theHellboundHeart, theHobbit);

// "The Hobbit", "The Auctioneer", "The Elementals", "The Hellbound Heart"
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.readStatus = readStatus;
    
    this.bookInfo = function () {
        return ('Book Title: ' + title + ' by ' + author + '. Page count: ' + pages + '. Read status: ' + readStatus);
    }
    
};
//adds input book to the myLibrary array
function addBookToLibrary () {
    const input = document.getElementById('book-input');
    myLibrary.push(input.value); 
}


//Creates cards in html displaying books from array
function displayBookInLibrary () {
    myLibrary.forEach(function (i) { 
        // Create separate divs for each piece of book info
        const bookTitle = document.createElement('div'); 
        bookTitle.innerText = i.title;
        const bookAuthor = document.createElement('div'); 
        bookAuthor.innerText = i.author; 
        const pages = document.createElement('div'); 
        pages.innerText = i.pages;
        const readStatus = document.createElement('div'); 
        readStatus.innerText = i.readStatus;

        // Add classes to each div
        bookTitle.classList.add('book-title')
        bookAuthor.classList.add('book-author')
        pages.classList.add('page-count')
        readStatus.classList.add('read-status')

        //Create container within card to hold book info 
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container')

        //Attach individual div children to container parent
        bookContainer.appendChild(bookTitle); 
        bookContainer.appendChild(bookAuthor); 
        bookContainer.appendChild(pages); 
        bookContainer.appendChild(readStatus);
        document.getElementById('library-grid').appendChild(bookContainer);
    });

    
};
displayBookInLibrary();

//open form 
function openForm() {
    document.getElementById('myForm').style.display = 'block'; 
}
//close form
function closeForm() {
    document.getElementById('myForm').style.display = 'none'; 

}