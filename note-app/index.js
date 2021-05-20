"use strict";
exports.__esModule = true;
var Autor_1 = require("./Models/Autor");
var Note_1 = require("./Models/Note");
var Notebook_1 = require("./Models/Notebook");
var author1 = new Autor_1.Author;
author1.setCode(1);
author1.setName('Amely');
author1.setSurname('Davis');
author1.setBirthdate('21/03/1986');
var author2 = new Autor_1.Author;
author2.setCode(2);
author2.setName('Bradly');
author2.setSurname('Fisher');
author2.setBirthdate('06/11/1979');
var note1 = new Note_1.Note;
note1.setCode(1);
note1.setTitle('Usability');
note1.setContent('Reprehenderit non quis consectetur excepteur quis. Sit tempor laboris nostrud velit culpa cillum consequat aliquip do nostrud. Eu laborum consectetur ullamco aliquip do exercitation anim consectetur mollit eu ut aliqua consectetur labore. Quis cillum ullamco excepteur qui nulla ex anim qui non nisi culpa.');
note1.setCategory('Alpha');
note1.setAuthor(author1);
var note2 = new Note_1.Note;
note2.setCode(2);
note2.setTitle('Rapids');
note2.setContent('Reprehenderit non quis consectetur excepteur quis. Sit tempor laboris nostrud velit culpa cillum consequat aliquip do nostrud. Eu laborum consectetur ullamco aliquip do exercitation anim consectetur mollit eu ut aliqua consectetur labore. Quis cillum ullamco excepteur qui nulla ex anim qui non nisi culpa.');
note2.setCategory('Alpha');
note2.setAuthor(author1);
var note3 = new Note_1.Note;
note3.setCode(3);
note3.setTitle('Superstructure');
note3.setContent('Reprehenderit non quis consectetur excepteur quis. Sit tempor laboris nostrud velit culpa cillum consequat aliquip do nostrud. Eu laborum consectetur ullamco aliquip do exercitation anim consectetur mollit eu ut aliqua consectetur labore. Quis cillum ullamco excepteur qui nulla ex anim qui non nisi culpa.');
note3.setCategory('Beta');
note3.setAuthor(author1);
var note4 = new Note_1.Note;
note4.setCode(4);
note4.setTitle('COM');
note4.setContent('Reprehenderit non quis consectetur excepteur quis. Sit tempor laboris nostrud velit culpa cillum consequat aliquip do nostrud. Eu laborum consectetur ullamco aliquip do exercitation anim consectetur mollit eu ut aliqua consectetur labore. Quis cillum ullamco excepteur qui nulla ex anim qui non nisi culpa.');
note4.setCategory('Alpha');
note4.setAuthor(author2);
var note5 = new Note_1.Note;
note5.setCode(5);
note5.setTitle('Quality');
note5.setContent('Reprehenderit non quis consectetur excepteur quis. Sit tempor laboris nostrud velit culpa cillum consequat aliquip do nostrud. Eu laborum consectetur ullamco aliquip do exercitation anim consectetur mollit eu ut aliqua consectetur labore. Quis cillum ullamco excepteur qui nulla ex anim qui non nisi culpa.');
note5.setCategory('Beta');
note5.setAuthor(author2);
var notebook1 = new Notebook_1.Notebook;
notebook1.setCode(1);
notebook1.setNoteList([note1, note2, note3, note4]);
notebook1.addNote(note5);
console.log(notebook1.getNoteListFilter('', 'Davis'));
