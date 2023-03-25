// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isCond: true}

  onClickEmoji = () => {
    this.setState({isCond: false})
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {isCond} = this.state
    return (
      <div className="container">
        {isCond ? (
          <div className="sub-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-un-order">
              {emojis.map(eachEmoji => (
                <li className="emoji-list" key={eachEmoji.id}>
                  <button
                    className="button"
                    type="button"
                    onClick={this.onClickEmoji}
                  >
                    <img
                      src={eachEmoji.imageUrl}
                      className="emoji-image"
                      alt={eachEmoji.name}
                    />
                  </button>
                  <p className="emoji-name">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="sub-container">
            <img
              src={resources.loveEmojiUrl}
              alt="love emoji"
              className="emoji-image"
            />
            <h1 className="heading">Thank You!</h1>
            <p className="emoji-name">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
