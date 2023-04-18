var books = [
    {
        title : "The Design of Everyday Things",
        author : "Don Bradman",
        alreadyRead: false,
    },
    {
        title : "The Most Human Human",
        author : "Brian Man",
        alreadyRead: true,
    }
];

let book = document.getElementById("BooksList");
console.log(book);

books.alreadyRead = true;

if(books.alreadyRead){
    let itemsEle = document.createElement("p");
    itemsEle.textContent = books.title;
    book.appendChild(itemsEle);
}
else{
    let itemsEle = document.createElement("p");
    itemsEle.textContent = books.title;
    book.appendChild(itemsEle);
}