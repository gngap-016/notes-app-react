import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ onChange }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch onChange={onChange} />
    </div>
  );
}

export default NoteAppHeader;