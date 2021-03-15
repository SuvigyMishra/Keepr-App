import React, { useState } from "react";

import Header from "./Header";
import Note from "./Note";

import importedNotes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(importedNotes);

  function CreateNewNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />

      <CreateArea CreateNewNote={CreateNewNote} />

      {notes.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
      ))}

    </div>
  );
}

export default App;
