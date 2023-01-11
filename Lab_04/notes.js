

let addButton = document.getElementById("add");

addButton.addEventListener('click', function(){

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const color = document.getElementById('color').value;
    const pin = document.getElementById('pin').checked;
    const date = new Date().toISOString();
    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let Obj = {
        title,
        content,
        color,
        pin,
        date
    }

    notesObj.push(Obj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    title = " ";
    content = " ";
    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    let txt = "";

    notesObj.forEach(function(element, index){
        txt +=`
        <div class="note>
            <h3 class="title">${element.title}</h3>
            <p class="content">${element.content}</p>
            <p class="createDate">${date.toLocaleString()}</p>
        </div>
        `
        
    });
    let notesElements = document.getElementById("notes");
    if(notesObj.length!=0){
        notesElements.innerHTML = txt;
    }
    else{
        notesElements.innerHTML = 'Nie ma notatek';
    }
    
}
showNotes();