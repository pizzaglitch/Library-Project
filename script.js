const myLibrary = []; 
// const theAuctioneer = new Book('The Auctioneer', 'Joan Samson', '260 pages', 'Unread');
// const theElementals = new Book('The Elementals', 'Michael McDowell', '230 pages', 'Unread');
// const theHellboundHeart = new Book('The Hellbound Heart', 'Clive Barker', '186 pages', 'Unread');

//Class refactor
class Book {
    constructor(title, author, pages, readStatus, position) {
        this.title = title, 
        this.author = author, 
        this.pages = pages,
        this.readStatus = readStatus, 
        this.position = position,

        myLibrary.push(this)
    }
    swapObjectReadStatus() {
        this.readStatus == 'Read' ? this.readStatus = 'Unread' : this.readStatus = 'Read';
    }
    swapButtonReadStatus() {
        if (this.innerText == 'Unread') {
            this.innerText = 'Read'
            this.style.setProperty('background', '#9A9B73') 
        } else {
            this.innerText = 'Unread'
            this.style.setProperty('background', '#F78E69') 
        }
    }
}
const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', '235 pages', 'Read');

// Creates cards in html displaying books from array
function displayBookInLibrary () {
    myLibrary.forEach(function (book) { 
        // Create separate divs for each piece of book info
        const bookTitle = document.createElement('div'); 
        bookTitle.innerText = book.title;
        const bookAuthor = document.createElement('div'); 
        bookAuthor.innerText = book.author; 
        const pages = document.createElement('div'); 
        pages.innerText = book.pages;
        const readStatus = document.createElement('button'); 
        readStatus.innerText = book.readStatus;
        const deleteButton = document.createElement('button'); 
        const bookPosition = myLibrary.indexOf(book); 
        
        // Add classes to each div
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('book-author');
        pages.classList.add('page-count');
        readStatus.classList.add('read-status');
        deleteButton.classList.add('delete-button');

        // Add event listeners to readStatus and deleteButton
        readStatus.addEventListener('click', book.swapButtonReadStatus);
        readStatus.addEventListener('click', function() {book.swapObjectReadStatus()});

        deleteButton.addEventListener('click', deleteContainer);

        //Create container within card to hold book info 
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');

        // Add unique id to each container matching its index
        bookContainer.setAttribute('id', bookPosition);

        //Attach individual div children to container parent
        bookContainer.appendChild(bookTitle); 
        bookContainer.appendChild(bookAuthor); 
        bookContainer.appendChild(pages); 
        bookContainer.appendChild(readStatus);
        bookContainer.appendChild(deleteButton);
        document.getElementById('library-grid').appendChild(bookContainer);
        
        //Sets default readStatus color on newly created book tile
        if (readStatus.innerText == 'Read') {
            readStatus.style.setProperty('background', '#9A9B73') 
        } else {
            readStatus.style.setProperty('background', '#F78E69') 
        }
    });
};
displayBookInLibrary ();

//open form 
function openForm() {
    document.getElementById('myForm').style.display = 'block'; 
}
//close form
function closeForm() {
    document.getElementById('myForm').style.display = 'none'; 
}

// Take input from form and create new book object 
function createNewBook () {
    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newPageCount = document.getElementById('page-count').value + ' pages';
    const newReadStatus = document.querySelector('input[name="read-status"]:checked').value;

    //clear grid 
    const libraryGrid = document.getElementById('library-grid');
    while (libraryGrid.firstChild) {
        libraryGrid.removeChild(libraryGrid.firstChild);
    }
    
    new Book(newTitle, newAuthor, newPageCount, newReadStatus);
    displayBookInLibrary();
    closeForm();
    document.getElementById("form-container").reset();
}

//delete book card and empty array
function deleteContainer() {
    let bookContainersId = this.parentElement.id; 
    myLibrary.forEach(function (i) { 
        if (bookContainersId == myLibrary.indexOf(i)){
        myLibrary.splice(bookContainersId, 1);
        }
    });
    this.parentElement.remove();    
}