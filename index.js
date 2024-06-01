const myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }


}




addBookToLibrary('Lord of the Rings', 'J.R.R Tolkien', 355, false);

addBookToLibrary('Great Expectations', 'Charles Dicklens', 286, false);

function seeBooks() {
    console.log("got here!")
    const libraryPane = document.querySelector("#library");
    libraryPane.innerHTML = ''
    myLibrary.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        let bookTitle = document.createElement("h3");
        bookTitle.textContent = book.title;
        bookTitle.classList.add("bookCard-title");
        bookCard.append(bookTitle);
        let bookAuthor = document.createElement("h4");
        bookAuthor.textContent = `Author: ${book.author}`;
        bookAuthor.classList.add("bookCard-author");
        bookCard.append(bookAuthor);
        let bookLength = document.createElement("p");
        bookLength.textContent = `Length: ${book.pages}`;
        bookLength.classList.add("bookCard-pages");
        bookCard.append(bookLength)
        libraryPane.append(bookCard);
        
    })
}

function addBookToLibrary(title, author, pages, read) {
    console.log("Book added, Title: " + title )
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
    
    
}
document.addEventListener("DOMContentLoaded", (event) => {
    seeBooks()

    const openModal = document.querySelector("#openModalButton")
    const modal = document.querySelector("#modal")
    const closeModalButton = modal.querySelector("#closeModalButton");
    openModalButton.addEventListener("click", (event) => {
        modal.showModal();
    });
    closeModalButton.addEventListener("click", (event) => {
        modal.close();
    });

    let addBookButton = document.querySelector(".addBookForm-submitButton");

    // Remove existing event listeners to prevent it being fired multiple times!
    let newAddBookButton = addBookButton.cloneNode(true);
    addBookButton.parentNode.replaceChild(newAddBookButton, addBookButton);
    addBookButton = newAddBookButton;

    addBookButton.addEventListener("click", (event) => {
        console.log("event ran")
        let bookTitleInput = document.querySelector("#bookTitle");
        let bookAuthorInput = document.querySelector("#bookAuthor")
        let bookPageInput = document.querySelector("#bookPages")
        let bookReadInput = document.querySelector("#readAlready")
        
        addBookToLibrary(bookTitleInput.value, bookAuthorInput.value, bookPageInput.value, bookReadInput.value)
        console.log(bookTitleInput.value);
        console.log(myLibrary)
        seeBooks()
        modal.close()
        event.preventDefault();
    });
});




