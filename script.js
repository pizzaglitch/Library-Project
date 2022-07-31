let myLibrary = []; 
const theAuctioneer = new Book('The Auctioneer', 'Joan Samson', '260 pages', 'Unread');
const theElementals = new Book('The Elementals', 'Michael McDowell', '230 pages', 'Unread');
const theHellboundHeart = new Book('The Hellbound Heart', 'Clive Barker', '186 pages', 'Unread');
const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', '235 pages', 'Read');

function Book(title, author, pages, readStatus, position) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.readStatus = readStatus;
    this.position = position; 

    this.bookInfo = function () {
        return ('Book Title: ' + title + ' by ' + author + '. Page count: ' + pages + '. Read status: ' + readStatus);
    }
    myLibrary.push(this)
};

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
        const readStatus = document.createElement('button'); 
        readStatus.innerText = i.readStatus;
        const deleteButton = document.createElement('button'); 
        const bookPosition = myLibrary.indexOf(i); 
        
        // Add classes to each div
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('book-author');
        pages.classList.add('page-count');
        readStatus.classList.add('read-status');
        deleteButton.classList.add('delete-button');

        // Add event listeners to readStatus and deleteButton
        readStatus.addEventListener('click', swapReadStatus);
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

// Take input from form and create new book object 
function createNewBook () {
    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newPageCount = document.getElementById('page-count').value + ' pages';
    const newReadStatus = document.querySelector('input[name="read-status"]:checked').value;
   
    //Quick fix to stop 4+ cards from being posted when a new card is created
    const libraryGrid = document.getElementById('library-grid');
    while(libraryGrid.firstChild){
        libraryGrid.removeChild(libraryGrid.firstChild);
      }
    new Book(newTitle, newAuthor, newPageCount, newReadStatus);
    displayBookInLibrary();
    closeForm();
    document.getElementById("form-container").reset();
}

// Swap read status on click 
function swapReadStatus() {
    this.innerText == 'Read' ? this.innerText = 'Unread' : this.innerText = 'Read';
}
     /* Verbose version of ternary above
    if (this.innerText == 'Read') {
        this.innerText = 'Unread';
    } else {
        this.innerText = 'Read';
    } */

//delete book card and empty array
function deleteContainer() {
    let bookContainersId = this.parentElement.id; 
    console.log(bookContainersId)
    myLibrary.forEach(function (i) { 
        if (bookContainersId == myLibrary.indexOf(i)){
            console.log(myLibrary.indexOf(i))
        myLibrary.splice(bookContainersId, 1);
        }
    });
    // I DID IT IT WORKS!!!
    this.parentElement.remove();    
}