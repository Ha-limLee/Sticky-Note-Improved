import React, { Component } from 'react'
import { NoteBtn, NoteSummary } from './NoteFrame'

export default class NoteIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numNotes: 0, // 노트 수

      // (key, value)를 저장하는 배열
      // key := note의 key
      // value := note 인스턴스
      notes: new Map()
    }
  }

  deleteNote (noteId) {
    console.log(this.state.numNotes)
    if (this.state.numNotes > 0) {
      this.state.notes.delete(noteId)
      this.setState({
        numNotes: this.state.numNotes - 1
      })
    }
  }

  addNote () {
    window.api.invoke()
      .then((resolve) => {
        console.log(resolve)
        this.state.notes.set(resolve,
          <NoteSummary key={resolve} id={resolve} deleteCallBack={this.deleteNote.bind(this)} />
        )
      })
      .then(() => {
        this.setState({
          numNotes: this.state.numNotes + 1
        })
      })
  }

  render () {
    const addNote = () => {
      this.addNote()
    }
    return (
      <div className='note_index'>
        {Array.from(this.state.notes.values())}
        <NoteBtn
          display='새 노트 만들기...'
          onClick={addNote}
        />
      </div>
    )
  }
}
