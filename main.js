//Select relevant elements
var modal = document.querySelector('dialog');
var openModal = document.querySelector('.btn.add-book');
var form = document.querySelector('form');
//Open modal
openModal.addEventListener('click', function () {
    modal.showModal();
});
//Close modal when clicking the backdrop
modal.addEventListener('click', function (event) {
    if (event.target.nodeName === 'DIALOG') {
        modal.close();
    }
});
//Array to store book details
var library = [];
//Book object constructor
function Book(title, author, pages, genre, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.status = status;
}
// Validate and add book to library when Submit is clicked
var submit = document.querySelector('.btn.submit');
submit.addEventListener('click', function (e) {
    addBookToLibrary(e);
    newBookCard();
    form.reset();
    modal.close();
});
// Get book info input details
function getBookInfo() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = Number(document.getElementById('pages').value);
    var genre = document.getElementById('genre').value;
    var status = document.querySelector('input[name="status"]:checked').value;
    return new Book(title, author, pages, genre, status);
}
// Add book to library
function addBookToLibrary(e) {
    e.preventDefault(); //Stop page refresh
    var newBook = getBookInfo();
    library.push(newBook);
}
// Create card for newly added book
function newBookCard() {
    var main = document.querySelector("main");
    var card = document.createElement("div");
    var span = document.createElement("span");
    var header = document.createElement("div");
    var info = document.createElement("div");
    var author = document.createElement("div");
    var authorName = document.createElement("div");
    var pages = document.createElement("div");
    var pagesNum = document.createElement("div");
    var genre = document.createElement("div");
    var genreName = document.createElement("div");
    var status = document.createElement("div");
    var statusShown = document.createElement("div");
    var statusBtn = document.createElement("button");
    card.classList.add('book-card');
    card.dataset.indexNumber = String(library.length - 1); //Add unique data attribute to card using its index position
    span.classList.add('remove');
    span.innerHTML = '<img src="assets/close.svg" alt="">';
    span.onclick = function (e) { deleteBookCard(e); }; //Call function when this element is clicked
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
    statusBtn.onclick = function (e) { changeStatus(e); };
    statusBtn.textContent = 'Change Status';
    // Use stored book details to populate these elements
    header.textContent = library.slice(-1)[0].title; //library.slice(-1) selects the last index of the array
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
    main.append(card);
}
function deleteBookCard(e) {
    var parentNode = e.target.parentNode.parentNode; //Select parent element two levels above target, because it has the relevant index number
    var cardIndex = parentNode.dataset.indexNumber;
    library.splice(cardIndex, 1); //Remove book object from array
    parentNode.remove();
    //Update the remaining data attribute numbers, so they again match the index values in the library array
    if (library.length !== 0) {
        //For each card after the deleted one, assign new index value
        for (var i = cardIndex; i < library.length; i++) {
            var cardList = document.getElementsByClassName('book-card');
            cardList[i].dataset.indexNumber = cardIndex;
        }
        ;
    }
}
function changeStatus(e) {
    var parentNode = e.target.parentNode;
    var cardIndex = parentNode.dataset.indexNumber;
    var statusShown = parentNode.querySelector('.info:last-of-type');
    //Change status in the library array
    if (library[cardIndex].status == 'Read') {
        console.log('true');
        library[cardIndex].status = 'Not Read';
    }
    else {
        library[cardIndex].status = 'Read';
    }
    //Change status shown in the card
    statusShown.textContent = library[cardIndex].status;
}
