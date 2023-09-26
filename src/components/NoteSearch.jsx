import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      };
    }, () => this.props.searchNote(this.state));
  }

  render() {
    return (
      <div className="note-search">
        <input type="text" placeholder="Cari catatan..." value={this.state.title} onChange={this.onSearchChangeEventHandler} />
      </div>
    );
  } 
}

export default NoteSearch;