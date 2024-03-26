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

// wish
const getStoredBookWish = () => {
    const storedBookWish = localStorage.getItem('book-wish');
    if(storedBookWish){
        return JSON.parse(storedBookWish);
    }
    return [] ;
}

const saveBookWish = bookId => {
    const storedBookWish = getStoredBookWish();
    const exist = storedBookWish.find(bookid => bookid === bookId) ;
    if(!exist){
        saveBookWish.push(bookId);
        localStorage.setItem('book-wish', JSON.stringify(storedBookWish))
    }
}

    const storedBookWish = getStoredBookWish();
    export {getStoredBookRead,  saveBookRead , getStoredBookWish, saveBookWish}