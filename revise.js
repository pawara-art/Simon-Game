// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function() {
//     // event.stopPropagation();
//     console.log("div was clicked");
// });


// ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis) {
//     li.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }



// Activity----------------------------------------------------
/*
let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

button.addEventListener("click", function(event) {
    let item = document.createElement("li");
    item.innerText = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.classList.add("delete");

    item.appendChild(deleteBtn);
    ul.appendChild(item);
    // console.log(input.value);
    input.value = "";
    
});

// 3> Event Delegation------------------------------------

ul.addEventListener("click", function(event) {
    // console.dir(event.target.nodeName);
    // console.log("button clicked");
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();
        console.log("delete");
    }
    


});
*/

// 2>
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         // console.log("deleted");
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     });
// }




