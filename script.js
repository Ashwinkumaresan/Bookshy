//selecting popup-box,overlay and button
var overlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup")

addpopupbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})

//selecting cancel
var cancelbutton=document.getElementById("cancel-popup")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})

//selecting container, add-book, book-title-input, book-author-input, book-description-input
var container=document.querySelector(".container")
var add_book=document.getElementById("add-book")
var book_title_input=document.getElementById("book-title-input")
var book_author_input=document.getElementById("book-author-input")
var book_description_input=document.getElementById("book-description-input")

add_book.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book_title_input.value}</h2>
    <h5>${book_author_input.value}</h5>
    <p>${book_description_input.value}</p>
    <button onclick='delete_button(event)'>Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})

function delete_button(event){
    event.target.parentElement.remove()
}