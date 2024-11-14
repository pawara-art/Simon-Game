// Event bubbling--------------------------------------
/*
let div = document.querySelector("div");
div.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("div was clicked");
});


let ul = document.querySelector("ul");
ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});


let lis = document.querySelectorAll("li");

for(li of lis) {
li.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("li was clicked");
})}
*/


// Activity------------------------------------------------------

let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

btn.addEventListener("click", function(event) {
    // console.log("btn was clicked");
    // console.log(input.value);
    let item = document.createElement("li");
    item.innerText = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.classList.add("delete");

    item.appendChild(deleteBtn);
    ul.appendChild(item);
    input.value = "";
    
});





/*
let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns) {
    delBtn.addEventListener("click", function() {
        // console.log("element deleted");

        let par = this.parentElement;
        console.log(par);
        par.remove();

    });
}
    */