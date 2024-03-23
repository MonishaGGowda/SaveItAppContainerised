const chalk = require('chalk')
const yargs =  require('yargs')
const notes = require('./notes.js')
const packageJson = require('./package.json')

//customise yargs version
yargs.version(packageJson.version)
//add, removes, read, list with help options for each
// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
             describe: 'Note title',
             demandOption: true,
             type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listAllNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Reads a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()