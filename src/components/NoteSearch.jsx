import React from "react";

function NoteSearch({ onChange }) {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari catatan..." onChange={onChange} />
    </div>
  );
}

export default NoteSearch;