const getStoredBookRead = () => {
    const storedBookRead = localStorage.getItem('book-read');
    if(storedBookRead){
        return JSON.parse(storedBookRead);
    }
    return [] ;
}

const saveBookRead = bookId => {
    const storedBookRead = getStoredBookRead();
    const exists = storedBookRead.find(bookid => bookid === bookId) ;
    if(!exists){
        storedBookRead.push(bookId);
        localStorage.setItem('book-read', JSON.stringify(storedBookRead))
    }
}

export {getStoredBookRead,  saveBookRead}