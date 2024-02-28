
var another=document.getElementById("experince")
var manoj=document.getElementById("education")

function onvisual() {
    another.style.display="block" 
    manoj.style.display="none"  
}
function onvisuals(){
    manoj.style.display="block"
    another.style.display="none"
}

var sidemenus=document.getElementById("sidemenu")
function closemenu(){
    sidemenus.style.right="-200px";
}
function opeanmenu(){
    sidemenus.style.right="0";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyz72fVo-NIHw0DK5VpLN1xL8aB0Cq7W8lHCRa0QKPt4JaR1mvOC8qeHccQtW0de8Lj/exec';
const form = document.forms['submit-to-google-sheet'];
const doc = document.querySelector(".msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        doc.innerHTML = "Message Sent Successfully";
        setTimeout(function () {
            doc.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});