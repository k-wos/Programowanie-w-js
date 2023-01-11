let addButton = document.querySelector('#add');
addButton.addEventListener('click', createNote);

function getNotes(){
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    return notes;
}

function saveNotes(notes){
    localStorage.setItem('notes', JSON.stringify(notes));
}

function createNote(){
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let color = document.getElementById("color").value;
    let pin = document.getElementById("pin").checked;
    let date = new Date().toISOString();

    let notes = getNotes();
    notes.push({title, content, color, pin, date});
    saveNotes(notes);
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('color').value = '#000000';
    document.getElementById('pin').checked = 'false';
    document.getElementById('date').value = '';
    displayNotes();
}

function deleteNote(index){
    let notes = getNotes();
    notes.splice(index,1);
    saveNotes(notes);

    displayNotes();
}
function editNote(index){
    let notes = getNotes();
    let note = notes[index];

    document.getElementById('form').setAttribute('data-index', index);
    document.getElementById('title').value = note.title;
    document.getElementById('content').value =note.content;
    document.getElementById('color').value = note.color;
    document.getElementById('pin').checked = note.pin;
    let date = new Date().toISOString();
    addButton.innerHTML = 'Zapisz';
    addButton.removeEventListener('click', createNote);
    addButton.addEventListener('click', saveChanges);

}

function saveChanges(){
    let index = document.getElementById('form').getAttribute('data-index');
    if(index === null){
        createNote();
        return;
    }
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let color = document.getElementById("color").value;
    let pin = document.getElementById("pin").checked;
    let date = new Date().toISOString();

    let notes = getNotes();
    notes[index] = {title, content, color, pin, date};
    saveNotes(notes)
    document.getElementById('form').setAttribute('data-index', -1);
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('color').value = '#000000';
    document.getElementById('pin').checked = 'false';
    addButton.innerHTML = 'Dodaj';
    addButton.removeEventListener('click', saveChanges);
    addButton.addEventListener('click', createNote);
    displayNotes();
;
}

function displayNotes(){
    let notes = getNotes();
    const ul = document.querySelector("ul");
    ul.innerHTML = ' ';
    for(let i = 0; i< notes.length; i++){
        let note = notes[i];

        let li = document.createElement('li');
        let div = document.createElement('div');
        
        let h3 = document.createElement('h3');
        h3.innerHTML = note.title;
        li.appendChild(h3);

        let p = document.createElement('p');
        p.innerHTML = note.content;
        li.appendChild(p);

        let caption = document.createElement('caption');
        caption.innerHTML = note.date;
        li.appendChild(caption);

        li.style.backgroundColor = note.color;

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute("id", "delete")
        deleteButton.innerHTML = 'Usuń notatkę';
        deleteButton.addEventListener('click',function(){
            deleteNote(i);
            
        });
        let editButton = document.createElement('button');
        editButton.setAttribute("id", "edit")
        editButton.innerHTML = 'Edytuj notatkę';
        editButton.addEventListener('click',function(){
            editNote(i);
            
            
        });
        li.appendChild(deleteButton);
        li.appendChild(editButton);
   
        ul.appendChild(li);
    };
    
    
}
displayNotes();