import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import NoteIndex from './components/lobby/NoteIndex'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      numNotes: 0,      // 노트 수
      createdCount: 0,  // 노트를 생성한 횟수
      
    // (key, value)를 저장하는 배열
    // key := note의 key
    // value := note 인스턴스
      notes: new Map()
    }
  }

  render () {

    const deleteNote = (noteId) => {
      if (this.state.numNotes > 0){
        this.state.notes.delete(noteId)
        this.setState({
          numNotes: this.state.numNotes - 1,
        })
      }
    }

    const addNote = () => {
      this.setState({
        numNotes: this.state.numNotes + 1,
        createdCount: this.state.createdCount + 1
      })
      let cnt = this.state.createdCount
      this.state.notes.set(cnt, <NoteIndex key={cnt} id={cnt} deleteCallBack={deleteNote}/>)
    }

    return (
      <div>
        <Header
          title='안녕하세요.'
        />
        <button onClick = {addNote}>
          노트 추가
        </button>

        {Array.from(this.state.notes.values())}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)