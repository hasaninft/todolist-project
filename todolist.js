let search = document.getElementById("search")
let input = document.getElementById("input");
let button = document.getElementById("button");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");


function input_length() {
    return input.value.length;
};

// function emty() {
//     if (ul.children.length == 0) {
//         let emty_msg = document.createElement("div")
//         emty_msg.appendChild(document.createTextNode("list box is emty ..."))
//         ul.appendChild(emty_msg);
//         emty_msg.id = "#msg_emty"
//     } else {
//         alert("lasdkhf")

//     }

// }
// emty()

function createTodolist() {
    let li = document.createElement("li");
    let item_li = document.createElement("h4");
    let child = document.createTextNode(input.value)
    item_li.appendChild(child)
    li.appendChild(item_li);
    ul.appendChild(li);

    // careate delete item
    let delete_logo = document.createElement("button")
    delete_logo.appendChild(document.createTextNode("x"));
    li.appendChild(delete_logo)
    delete_logo.addEventListener("click", delete_item)

    function delete_item() {
        li.classList.add("delete")
    }
    // creae chech item
    let check = document.createElement("button");
    check.appendChild(document.createTextNode("done "))
    li.appendChild(check);
    check.addEventListener("click", done_item);

    let div_item = document.createElement("div");


    function done_item() {
        li.classList.toggle("done")
    }
}



function addListAfterClick() {
    if (input_length() > 0) {
        createTodolist()
    } else {
        alert("please enter text in form")
    }

    input.value = ""

};

function addListAfterKepress(ali) {
    if (input_length() == 0 && ali.which === 13) {
        alert("please enter text in form")
    }
    if (input_length() > 0 && event.which === 13) {
        createTodolist()
        input.value = ""
    }
};



function searching() {
    let input_user, filter, ul, li, a, i, txtValue;
    input_user = document.getElementById("search");
    filter = input_user.value.toUpperCase();
    ul = document.querySelector("ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h4")[0];
        txtValue = a.textContent || a.innerText;
        console.log( a.innerText)
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
searching()
search.addEventListener("keyup", searching);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKepress)