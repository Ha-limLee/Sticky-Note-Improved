import React, { Component } from 'react'
import { NoteBtn, NoteSummary } from '../NoteFrame'

// let instance = null

export default class NoteIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numNotes: 0, // 노트 수

      // (key, value)를 저장하는 배열
      // key := note 삭제를 위한 key, NoteFrame의 id와 동일하다
      // value := NoteFrame의 props(key, {id, text})
      notes: new Map()
    }
  }

  /**
   * NoteIndex가 처음 렌더링된 후, local에서 데이터를 가져온다
   */
  componentDidMount () {
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
    const notesItem = window.localStorage.getItem('sticky-notes-app-data-notes')
    if (notesItem) {
      prevNotes = JSON.parse(notesItem, reviver)
    }

    // noteWindow에서 받은 값이 있는지 확인한다
    const fromNoteWindow = window.api.getTextCache()
    if (fromNoteWindow.id) {
      console.log(fromNoteWindow.id)
      prevNotes.delete(fromNoteWindow.id)
      prevNotes.set(fromNoteWindow.id, fromNoteWindow)
    }

    console.log('refreshed?')

    this.setState({
      numNotes: prevNum,
      notes: prevNotes
    })
  }

  /**
   * NoteIndex가 렌더링된 후, local에 데이터를 저장한다
   */
  componentDidUpdate () {
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

    window.localStorage.setItem('sticky-notes-app-data-notes', JSON.stringify(notes, replacer))
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
        this.state.notes.set(resolve, { id: resolve, text: '' })
      })
      .then(() => {
        this.setState({
          numNotes: this.state.numNotes + 1
        })
      })
  }

  /**
   * @param {*} obj obj.key := noteId, obj.value := text
   */
  setText (obj) {
    const key = obj.key
    const ref = this.state.notes
    ref[key].text = obj.value

    this.setState({
      notes: ref
    })
  }

  /**
   * notes: Map이 렌더링 될 수 있도록 Array로 바꾼다
   * @returns [NoteSummary]
   */
  formNote () {
    const noteArray = Array.from(this.state.notes.values())
    return noteArray.map(
      (val) => <NoteSummary key={val.id} id={val.id} text={val.text} deleteCallBack={this.deleteNote.bind(this)} />)
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
