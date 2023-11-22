var submit = document.querySelector("input#submit")
var newTask = document.querySelector("input#tasks")

submit.disabled = true

newTask.addEventListener("input", () => {
    submit.disabled = false
})

submit.addEventListener("click", () => {
    var lItemValue = newTask.value
    var lItemField = document.createElement("li")
    lItemField.innerText = lItemValue
    document.querySelector("#tasks").appendChild(lItemField)
})

return false