
//Select required relevant elements
const modal: any = document.querySelector('dialog');
const openModal: any = document.querySelector('.btn.add-book');
const form: any = document.querySelector('form');

//Open modal
openModal.addEventListener('click', () => {
    modal.showModal()
})

//Close modal when clicking the backdrop
modal.addEventListener('click', (event) => {
    if (event.target.nodeName === 'DIALOG') {
        modal.close()
    }
})


//Library types
interface myLibrary {
    title: string
    author: string
    pages: number
    status: string
}

//Array to store book details
const library: myLibrary[] = [];


//Book object constructor
function Book(title: string, author: string, pages: number, genre: string, status: string) {
    this.title = title
    this.author = author
    this.pages = pages
    this.genre = genre
    this.status = status
}
 

// Validate and add book to library when Submit is clicked
const submit: any = document.querySelector('.btn.submit');

submit.addEventListener('click', (e) => {
    addBookToLibrary(e)
    form.reset()
    modal.close()
})

// Get book info input details
function getBookInfo() {
    const title = (<HTMLInputElement>document.getElementById('title')).value;
    const author = (<HTMLInputElement>document.getElementById('author')).value;
    const pages = Number((<HTMLInputElement>document.getElementById('pages')).value);
    const genre  = (<HTMLInputElement>document.getElementById('author')).value;
    const status = document.querySelector<HTMLInputElement>('input[name="status"]:checked')!.value;
    return new Book(title, author, pages, genre, status);
}

// Add book to library
function addBookToLibrary(e) {
    e.preventDefault()             //Stop page refresh
    const newBook = getBookInfo() 
    library.push(newBook)         
    //return false : Also Prevents page refresh
}

// Create card for newly added book
function newBookCard() {
    const main = document.querySelector("main");
    const card = document.createElement("div");
    const span = document.createElement("span");
    const header = document.createElement("div");
    const info = document.createElement("div");
    const author = document.createElement("div");
    const authorName = document.createElement("div");
    const pages = document.createElement("div");
    const pagesNum = document.createElement("div");
    const genre = document.createElement("div");
    const genreName = document.createElement("div");
    const status = document.createElement("div");
    const statusShown = document.createElement("div");
    const statusBtn = document.createElement("button")

    span.classList.add('remove');
    span.innerHTML = '<img src="assets/close.svg" alt="">';
    header.classList.add('book-header');
    header.textContent = 'Lord of the Rings';
    info.classList.add('info-grid');
    author.classList.add('info-title');
    author.textContent = 'Author';
    authorName.classList.add('info');
    authorName.textContent = 'J.R.R Tolkien';
    pages.classList.add('info-title');
    pages.textContent = 'Pages';
    pagesNum.classList.add('info');
    pagesNum.textContent = '230';
    genre.classList.add('info-title');
    genre.textContent = 'Genre';
    genreName.classList.add('info');
    genreName.textContent = 'Fantasy';
    status.classList.add('info-title');
    status.textContent = 'Status';
    statusShown.classList.add('info');
    statusShown.textContent = 'Read';
    statusBtn.classList.add('status');
    statusBtn.textContent = 'Change Status';

    card.classList.add('book-card');
    
    card.appendChild(span);
    card.appendChild(header);
    card.appendChild(info);
    info.appendChild(author);
    info.appendChild(authorName);
    info.appendChild(pages);
    info.appendChild(pagesNum);
    info.appendChild(genre);
    info.appendChild(genreName);
    info.appendChild(status);
    info.appendChild(statusShown);
    card.appendChild(statusBtn);
    main.append(card);
} 

// Delete any book card
function deleteBookCard() {
    
}

//Code reasoning
//1. User opens the modal
//2. Inputs the details, selects Y/N, and clicks submit
//2.1 Store the input data into local storage
//3. This info will be entered as parameters for the book constructor
//4. The output of the book function is stored in the library array, so you have an array of objects  