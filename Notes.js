showNotes();
console.log("Notes Taking Website")

let add_btn = document.getElementById('add-btn');
add_btn.addEventListener('click', addNote);
function addNote() {

    let new_notes = document.getElementById("text-notes");
    if (new_notes.value == "") {
        alert("Enter Some text in note box , Then Add Notes")
    }
    else {
        let val = confirm("Do you want to save this note on your notebook");
        if (val == true) {
            notes = localStorage.getItem("allNotes");
            if (notes == null) {
                notesObj = [];
            }
            else {
                notesObj = JSON.parse(notes);
            }
            notesObj.push(new_notes.value);
            localStorage.setItem("allNotes", JSON.stringify(notesObj));
            new_notes.value = "";
        }

    } showNotes();
}
function showNotes() {
    notes = localStorage.getItem("allNotes");
    saveNotes = document.getElementById('savednotes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="allNotes"> 
                <!-- <textarea id="notes" cols="30" rows="10"></textarea> -->

                <h5 class="note-title notes "><u>Note ${index + 1}</u></h5>
                <p class="note-text notes">${element}</p>
                </div>
                <button id= ${index} onclick="deleteNote(this.id)" class="dlt-btn">Delete Note</button>`

    });
    notesObjElem = document.getElementById('savednotes')
    if (notesObj.length == 0) {
        saveNotes.innerHTML = `There is nothing to Show. You have to save Notes First !`
        saveNotes.style.margin = "3.5vw";
    }
    else {
        saveNotes.innerHTML = html;
    }

}
function deleteNote(index) {
    let val = confirm("Do You really want to delete this Notes")
    if (val == true) {
        notes = localStorage.getItem("allNotes");
        notesObj = JSON.parse(notes)
        notesObj.splice(index, 1)
        localStorage.setItem("allNotes", JSON.stringify(notesObj));
        showNotes();
    }

};
serach=document.getElementById('search');
serach.addEventListener('input',serachTxt);
function serachTxt(){
    inputValue=search.value.toLowerCase();
    console.log(inputValue)
    let allsavenote=document.getElementsByClassName('allNotes');
    Array.from(allsavenote).forEach(function(element){
        let allsavenote_Text=element.getElementsByTagName('p')[0].innerText;
        if(allsavenote_Text.includes(inputValue)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
            

        }

    })
};