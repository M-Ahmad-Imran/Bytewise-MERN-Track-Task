const {books} = require("./books");

const displayAllbooks = ()=>{
    const display = books()
    display.forEach(book => {
        console.log(`\n${book.name} ${book.author}`); 
    });
}

module.exports = {displayAllbooks};