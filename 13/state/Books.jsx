import { Component } from 'react'

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = { timesRead: 0 };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    const newTimesRead = this.state.timesRead + 1;
    this.setState({ timesRead: newTimesRead });
  }

  render() {
    return (
      <>
        <p>{this.props.author}</p>
        <ul>
          <li>A Game of Thrones</li>
          <li>A Clash of Kings</li>
          <li>A Storm of Swords</li>
        </ul>
        <p>I have read these 3 books {this.state.timesRead} times!</p>
        <button onClick={this.increaseCount}>Increase!</button>
      </>
    );
  }
}

export default Books;
