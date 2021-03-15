import React, { useState } from "react";

function CreateArea(props) {
  //Using hooks to Read the state of whatever is typed and send it to make a new Note

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function updateNote(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function createNote(event) {
    props.CreateNewNote(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={updateNote} value={note.title} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={updateNote}
          value={note.content || ""}
        />
        <button onClick={createNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
