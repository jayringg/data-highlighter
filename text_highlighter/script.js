 function insert() {
 const textarea = document.getElementById('text_insert');
let value = textarea.value;
document.getElementById('paragraph').innerHTML = value
textarea.value = '';

 } 
function search() {
    let textToSearch = document.getElementById
    ("text-to-search").value;
    let paragraph = document.getElementById
    ("paragraph");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${textToSearch}`,"gi");

    paragraph.innerHTML = paragraph.textContent.
    replace(pattern, match => `<mark>${match}</mark>`);
    
    
}
 