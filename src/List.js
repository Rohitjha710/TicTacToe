import React, { Component } from "react";
import { Link } from "react-router-dom";
const apiKey = "f8fd58024b0cb495538a72009478e9b1";
const token =
  "cd01d05e0ddf70aec5e7130b16463fdf99378cb2925a98b91f50b5c623f32e9b";

class List extends Component {
  state = {
    listId: this.props.listId,
    cards: [],
    openModal: false,
    newCardName:""
  };
  componentDidMount() {
    fetch(
      "https://api.trello.com/1/lists/" +
        this.state.listId +
        "/cards?fields=all&key=" +
        apiKey +
        "&token=" +
        token
    )
      .then(cardsResponseObject => cardsResponseObject.json())
      .then(cards => this.setState({ cards: cards }));
  }
  displayAlert = cardNumber => {
    alert(
      "Name of card = " +
        this.state.cards[cardNumber].name +
        "\nUrl = " +
        this.state.cards[cardNumber].url
    );
  };
  handleChange=(event) =>{
    this.setState({ newCardName: event.target.value });
  }

  handleSubmit=(event)=> {
    fetch('https://api.trello.com/1/cards?name='+this.state.newCardName+'&idList='+this.state.listId+'&keepFromSource=all&key='+apiKey+'&token='+token+'',{method:"POST"})
    .then(newCardResponse=>newCardResponse.json())
    .then(newCard=>this.setState({cards:[...this.state.cards,newCard]}))
    event.preventDefault();
  }

  render() {
    console.log(this.state.cards);
    return (
      <React.Fragment>
        {this.state.cards.map((card, i) => (
          <Link to={`/b/${this.props.boardId}/c/${card.id}`}>
            <div> {card.name}</div>
          </Link>
        ))}
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="comment-input"
              type="text"
              value={this.state.newCardName}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add Card" />
        </form>
      </React.Fragment>
    );
  }
}

export default List;
