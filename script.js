const inputbox = document.getElementById("input-box");
const listcon = document.getElementById("list-con");
function addtask() {
    if (inputbox.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
}
listcon.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
