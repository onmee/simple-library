
const modal: any = document.querySelector('dialog');
const openModal: any = document.querySelector('.btn.add-book');

openModal.addEventListener('click', () => {
    modal.showModal();
})

//Close modal when clicking the backdrop
modal.addEventListener('click', (event) => {
    if (event.target.nodeName === 'DIALOG') {
        modal.close()
    }
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
