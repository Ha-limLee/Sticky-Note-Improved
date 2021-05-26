import React, { Component } from 'react'
import { NoteBtn, NoteSummary } from '../NoteFrame'

// let instance = null

export default class NoteIndex extends Component {
  constructor (props) {
    super()
    this.state = {
      numNotes: 0, // 노트 수

      // (key, value)를 저장하는 배열
      // key := note 삭제를 위한 key, NoteFrame의 id와 동일하다
      // value := NoteFrame의 props(key, {id})
      notes: new Map()
    }
  }

  _storeNote = () => {
    const { numNotes, notes } = this.state
    window.localStorage.setItem('sticky-notes-app-data-num', numNotes)

    function replacer (key, value) {
      if (value instanceof Map) {
        return {
          dataType: 'Map',
          value: Array.from(value.entries())
        }
      } else {
        return value
      }
    }

    window.localStorage.setItem('sticky-notes-app-data-id', JSON.stringify(notes, replacer))
  }

  /**
   * NoteIndex가 처음 렌더링된 후, local에서 데이터를 가져온다
   */
  componentDidMount () {
    window.addEventListener('beforeunload', this._storeNote)
    
    let prevNum = window.localStorage.getItem('sticky-notes-app-data-num')
    prevNum = Number(prevNum || 0)

    if (prevNum === 0) {
      return
    }

    function reviver (key, value) {
      if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
          return new Map(value.value)
        }
      }
      return value
    }

    let prevNotes = new Map()
    const notesItem = window.localStorage.getItem('sticky-notes-app-data-id')
    if (notesItem) {
      prevNotes = JSON.parse(notesItem, reviver)
    }

    console.log('refreshed?')

    this.setState({
      numNotes: prevNum,
      notes: prevNotes
    })
  }

  componentDidUpdate () {
  }

  deleteNote (noteId) {
    if (this.state.numNotes > 0) {
      this.state.notes.delete(noteId)

      this.setState({
        numNotes: this.state.numNotes - 1
      })
    }
  }

  addNote () {
    window.api.getNanoid()
      .then((resolve) => {
        console.log(resolve)
        this.state.notes.set(resolve, { id: resolve })
      })
      .then(() => {
        this.setState({
          numNotes: this.state.numNotes + 1
        })
      })
  }

  /**
   * notes: Map이 렌더링 될 수 있도록 Array로 바꾼다
   * @returns [NoteSummary]
   */
  formNote () {
    const noteArray = Array.from(this.state.notes.values())
    return noteArray.map(
      (val) => <NoteSummary key={val.id} id={val.id} deleteCallBack={this.deleteNote.bind(this)} />)
  }

  render () {
    const addNote = () => {
      this.addNote()
    }

    return (
      <div className='note_index'>
        {this.formNote()}
        <NoteBtn
          display='새 노트 만들기...'
          onClick={addNote}
        />
      </div>
    )
  }
}
