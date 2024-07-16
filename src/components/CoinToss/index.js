// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {head: 0, tail: 0, isTrue: true}

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({head: prevState.head + 1, isTrue: true}))
    } else {
      this.setState(prevState => ({tail: prevState.tail + 1, isTrue: false}))
    }

    console.log(tossResult)
  }

  render() {
    const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const {head, tail, isTrue} = this.state
    const url = isTrue ? headUrl : tailUrl

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para"> Heads (or) Tails</p>
          <img src={url} alt="toss result" className="image" />
          <div>
            <button type="button" onClick={this.tossTheCoin} className="button">
              Toss Coin
            </button>
          </div>
          <div className="para-container">
            <p className="sm-para">Total: {head + tail}</p>
            <p className="sm-para">Heads: {head}</p>
            <p className="sm-para">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
