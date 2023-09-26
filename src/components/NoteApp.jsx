import React from "react";
import { getInitialData } from "../utils/data";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
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

  render() {
    return (
      <>
        <NoteAppBody notes={this.state.notes} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
      </>
    )
  }
}

export default NoteApp;