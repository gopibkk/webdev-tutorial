import { Component } from 'react'

class Books extends Component {
  render() {
    return (
      <>
        <p>{this.props.author}</p>
        <ul>
          <li>A Game of Thrones</li>
          <li>A Clash of Kings</li>
          <li>A Storm of Swords</li>
        </ul>
      </>
    );
  }
}

export default Books;
