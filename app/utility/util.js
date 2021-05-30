
export class NoteProps {
  constructor (props) {
    this.id = props.id
    this.text = props.text
  }

  /**
   * @returns props object
   */
  getProps () {
    return this.props
  }
}
