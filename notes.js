console.log("starting notes.js");

var addNote = (title, body) => {
	console.log('Adding note', title, body);
};

var getAll = () => {
	console.log('getting all notes')
}

module.exports = {
	addNote,
	getAll
};