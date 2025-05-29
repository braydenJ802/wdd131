// arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
console.log(stepsHtml);
document.querySelector("#myList").innerHTML = stepsHtml.join();
