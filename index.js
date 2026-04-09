const input = document.querySelector(".inputField");
const button = document.querySelector(".btn");
const toDoContainer = document.querySelector(".toDoContainer");

button.addEventListener("click", () => {
    const item  = document.createElement("li");
    item.innerText = input.value;
    item.classList.add("toDoList")
    toDoContainer.appendChild(item);
    input.value = "";

item.addEventListener("click", () => {
item.classList.add("doneItem");
})

item.addEventListener("dblclick", () => {
toDoContainer.removeChild(item);
})

})




