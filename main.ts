
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
function bookCard() {
    
} 
// Loop through the library array and add the data to the cards


function validateForm() {

}

//Code reasoning
//1. User opens the modal
//2. Inputs the details, selects Y/N, and clicks submit
//2.1 Store the input data into local storage
//3. This info will be entered as parameters for the book constructor
//4. The output of the book function is stored in the library array, so you have an array of objects  