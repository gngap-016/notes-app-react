import React from "react";
import { getInitialData } from "../utils/data";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onArchiveHandler(id) {
    const note = this.state.notes.find(note => note.id === id);
    note.archived = !note.archived;
    this.setState({note});
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes});
  }

  onAddNoteHandler({title, body}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }

  render() {
    return (
      <>
        <NoteAppHeader onChange={() => {}} />
        <NoteAppBody notes={this.state.notes} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} addNote={this.onAddNoteHandler} />
      </>
    )
  }
}

export default NoteApp;