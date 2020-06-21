/* eslint-disable no-restricted-globals */
/* eslint-disable no-extra-bind */
/* eslint-disable no-undef */
import React, { Component } from "react";
import "./tic.css";
import Modal from "react-modal";
import { blue } from "color-name";
class TicTac extends Component {
  constructor() {
    super();
    this.clicked = this.clicked.bind(this);
  }
  state = {
    cubes: [
      { id: 0, value: "", isSet: false },
      { id: 1, value: "", isSet: false },
      { id: 2, value: "", isSet: false },
      { id: 3, value: "", isSet: false },
      { id: 4, value: "", isSet: false },
      { id: 5, value: "", isSet: false },
      { id: 6, value: "", isSet: false },
      { id: 7, value: "", isSet: false },
      { id: 8, value: "", isSet: false }
    ],
    cubesOf: { X: [], O: [] },
    howManyChecked: 0,
    currentPlayer: "",
    winner: "",
    modalIsOpen: false
  };
  clicked(id) {
    if (this.state.cubes[id].isSet === false) {
      let player = this.state.howManyChecked % 2 === 0 ? "X" : "O";
      let tempCubes = [...this.state.cubes];
      tempCubes[id].value = player;
      tempCubes[id].isSet = true;
      let cubesOf = { ...this.state.cubesOf };
      cubesOf[player].push(id);
      this.setState(
        {
          cubes: tempCubes,
          howManyChecked: this.state.howManyChecked + 1,
          cubesOf,
          currentPlayer: player
        },
        () => {
          setTimeout(
            function() {
              let cubesOf = { ...this.state.cubesOf };
              let currentPlayer = this.state.currentPlayer;
              let checkArr = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 5, 8]
              ];
              for (let i = 0; i <= 7; i++) {
                if (
                  cubesOf[currentPlayer].includes(checkArr[i][0]) &&
                  cubesOf[currentPlayer].includes(checkArr[i][1]) &&
                  cubesOf[currentPlayer].includes(checkArr[i][2])
                ) {
                  this.setState({winner:currentPlayer,modalIsOpen:true})
                }
              }
              if(this.state.howManyChecked === 9)
              {
                this.setState({modalIsOpen:true})
              }
            }.bind(this),
            100
          );
        }
      );
    }
  }

  render() {
    const { cubes } = this.state;
    return (
      <React.Fragment>
        <h4 style={{ textAlign: "center", marginTop: 30, marginBottom: 40 }}>
          Tic Tac Toe game by Rohit Jha
        </h4>
        <div className="containerr">
          <div className="cube00" onClick={() => this.clicked(0)}>
            {cubes[0].value}
          </div>
          <div className="cube00" onClick={() => this.clicked(1)}>
            {cubes[1].value}
          </div>
          <div className="cube01" onClick={() => this.clicked(2)}>
            {cubes[2].value}
          </div>
        </div>
        <div className="containerr">
          <div className="cube0" onClick={() => this.clicked(3)}>
            {cubes[3].value}
          </div>
          <div className="cube0" onClick={() => this.clicked(4)}>
            {cubes[4].value}
          </div>

          <div className="cube1" onClick={() => this.clicked(5)}>
            {cubes[5].value}
          </div>
        </div>
        <div className="containerr">
          <div className="cube0" onClick={() => this.clicked(6)}>
            {cubes[6].value}
          </div>
          <div className="cube0" onClick={() => this.clicked(7)}>
            {cubes[7].value}
          </div>

          <div className="cube1" onClick={() => this.clicked(8)}>
            {cubes[8].value}
          </div>
        </div>
        <Modal isOpen={this.state.modalIsOpen} className="modalP">
          {this.state.winner === '' ? <h2> Match tie</h2>:<h2>{this.state.winner} has won</h2> }
          <button style={{backgroundColor:'yellow'}} onClick={()=>location.reload()}>Play Again</button>
        </Modal>
      </React.Fragment>
    );
  }
}
export default TicTac;
