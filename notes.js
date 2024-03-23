const fs = require('fs')
const chalk =  require('chalk')

//Add Note Functionality
const addNote = (title, body) => {
   const notes = loadNotes()
   const duplicateNote = notes.find((note) => note.title === title)
   if (!duplicateNote) {
       notes.push({
        title: title,
        body: body
       })
       saveNotes(notes)
       console.log(chalk.green.inverse('New note added!'))
    }
    else{
        console.log(chalk.red.inverse('Note title already exists!'))
    }
}

//Remove Note Functionality
const removeNote = (title) => {
   const notes = loadNotes()
   const notesList = notes.filter( (note) => note.title !== title)
   if(notesList.length < notes.length){
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesList)
   }
   else {
      console.log(chalk.inverse.red('No note found!'))
   }
}

//List All Notes present in json file
const listAllNotes = () => {
    const notesList =  loadNotes();
    console.log(chalk.inverse("Your notes"))
    notesList.forEach(note => console.log(note.title));
}

//Read a note by passing title
const readNote = (title) => {
    const notesList = loadNotes();
    const note = notesList.find((note) => note.title === title)
    if(note){
        console.log( 'Title: ' + chalk.italic(note.title))
        console.log('Body: ' + note.body)
    }
    else{
        console.log(chalk.red.inverse('No Note Found!'))
    }
}

//Save notes called while adding
const saveNotes = (notes) => {
   const notesJSON =  JSON.stringify(notes)
   fs.writeFileSync('notes.json',notesJSON)
}

//Load notes from json file
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON =  dataBuffer.toString();
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listAllNotes: listAllNotes,
    readNote: readNote
}