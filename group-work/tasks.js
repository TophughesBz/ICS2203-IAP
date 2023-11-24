/**
  * GROUP MEMBERS:-
  * SCT211-0069/2022 Methusella Misiko
  * SCT211-0071/2022 Gift Nestah
  * SCT211-0006/2022 Chrispin Maina
  * SCT211-0765/2022 Meshack Otieno
**/


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
