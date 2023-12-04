
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
    genre: string
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
    newBookCard()
    form.reset()
    modal.close()
})

// Get book info input details
function getBookInfo() {
    const title = (<HTMLInputElement>document.getElementById('title')).value;
    const author = (<HTMLInputElement>document.getElementById('author')).value;
    const pages = Number((<HTMLInputElement>document.getElementById('pages')).value);
    const genre  = (<HTMLInputElement>document.getElementById('genre')).value;
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

    card.classList.add('book-card');
    span.classList.add('remove');
    span.innerHTML = '<img src="assets/close.svg" alt="">';
    header.classList.add('book-header');
    
    info.classList.add('info-grid');
    author.classList.add('info-title'); 
    author.textContent = 'Author';
    authorName.classList.add('info');
  
    pages.classList.add('info-title');
    pages.textContent = 'Pages';
    pagesNum.classList.add('info');
    
    genre.classList.add('info-title');
    genre.textContent = 'Genre';
    genreName.classList.add('info');
    
    status.classList.add('info-title');
    status.textContent = 'Status';
    statusShown.classList.add('info');
    
    statusBtn.classList.add('status');
    statusBtn.textContent = 'Change Status';

    // Use stored book details to populate these elements
    header.textContent = library.slice(-1)[0].title; //library.slice(-1) accesses the last index of the array
    authorName.textContent = library.slice(-1)[0].author;
    pagesNum.textContent = String(library.slice(-1)[0].pages);
    genreName.textContent = library.slice(-1)[0].genre;
    statusShown.textContent = library.slice(-1)[0].status;

    
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
    main!.append(card);
} 

// Delete any book card
function deleteBookCard() {
    
}
