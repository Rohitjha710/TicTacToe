import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
const apiKey = "f8fd58024b0cb495538a72009478e9b1";
const token =
  "cd01d05e0ddf70aec5e7130b16463fdf99378cb2925a98b91f50b5c623f32e9b";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class cardModal extends React.Component {
  state = {
    modalIsOpen: true,
    boardId: "",
    cardId: "",
    currentcardName: "",
    currentcardDescription: ""
  };
  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.setState(
      {
        boardId: this.props.match.params.id,
        cardId: this.props.match.params.cardId
      },
      () => {
        fetch(
          "https://api.trello.com/1/cards/" +
            this.state.cardId +
            "?attachments=false&attachment_fields=all&members=false&membersVoted=false&checkItemStates=false&checklists=none&checklist_fields=all&board=false&list=false&pluginData=false&stickers=false&sticker_fields=all&customFieldItems=false&key=" +
            apiKey +
            "&token=" +
            token +
            ""
        )
          .then(cardResponseObject => cardResponseObject.json())
          .then(card =>
            this.setState({
              currentcardName: card.name,
              currentcardDescription: card.desc
            })
          );
      }
    );
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        {/* <span className="modalList" onClick={this.openModal}>
          {this.props.cardName}
        </span> */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            {this.state.currentcardName}
          </h2>
          <p>{this.state.currentcardDescription}</p>
          <Link to={`/b/${this.state.boardId}`}>
            <button onClick={this.closeModal}>close</button>
          </Link>
        </Modal>
      </div>
    );
  }
}
export default cardModal;
