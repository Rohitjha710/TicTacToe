import React, { Component } from "react";
import List from "./List";
const apiKey = "f8fd58024b0cb495538a72009478e9b1";
const token =
  "cd01d05e0ddf70aec5e7130b16463fdf99378cb2925a98b91f50b5c623f32e9b";

class Lists extends Component {
  state = {
    boardId: this.props.match.params.id,
    lists: []
  };
  componentDidMount() {
    fetch(
      "https://api.trello.com/1/boards/" +
        this.state.boardId +
        "/lists?cards=none&card_fields=all&filter=open&fields=all&key=" +
        apiKey +
        "&token=" +
        token
    )
      .then(listResponseObject => listResponseObject.json())
      .then(lists => this.setState({ lists: lists }));
  }
  render() {
    return (
      <section className="lists">
        {" "}
        {this.state.lists.map(list => (
          <div className="list">
            <h2>{list.name}</h2>
            <List boardId={this.state.boardId} key={list.id} listId={list.id} />
          </div>
        ))}
      </section>
    );
  }
}

export default Lists;
