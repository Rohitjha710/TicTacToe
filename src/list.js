import React, { Component } from "react";
const apiKey = "f8fd58024b0cb495538a72009478e9b1";
const token =
  "cd01d05e0ddf70aec5e7130b16463fdf99378cb2925a98b91f50b5c623f32e9b";

class List extends Component {
  state = {
    listId: this.props.listId,
    cards: []
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

  render() {
    console.log(this.state.cards);
    return this.state.cards.map((card,i )=> <span className="card">{card.name}</span>);
  }
}

export default List;
