
const modal: any = document.querySelector('dialog');
const openModal: any = document.querySelector('.btn.add-book');

openModal.addEventListener('click', () => {
    modal.showModal();
})


//Library types
interface myLibrary {
    title: string;
    author: string;
    pages: number;
    status: boolean;
}

//Array to store book details
const library: myLibrary[] = [];
