import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

function NoteAppBody({ notes, onArchive, onDelete, addNote }) {
  const archiveNotes = notes.filter((note) => note.archived === true);
  const unArchiveNotes = notes.filter((note) => note.archived === false);

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      { (unArchiveNotes.length > 0) 
        ? <NoteList notes={unArchiveNotes} onArchive={onArchive} onDelete={onDelete} /> 
        : <p className="notes-list__empty-message">Tidak ada Catatan</p> 
      }
      <h2>Arsip</h2>
      { (archiveNotes.length > 0)
        ? <NoteList notes={archiveNotes} onArchive={onArchive} onDelete={onDelete} /> 
        : <p className="notes-list__empty-message">Tidak ada Catatan</p> 
      }
    </div>
  );
}

export default NoteAppBody;