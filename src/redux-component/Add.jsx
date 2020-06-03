import React, { Component } from "react";
class Add extends Component {
  state = { title: "", body: "" };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = () => {
      
    const title = this.state.title;
    const body = this.state.body;
    let post={
        title:title,
        body:body
    }
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(post)
    }).then(a=>a.json())
      .then(r => {
        console.log(r);
      });
  };
  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.title}
          placeholder="add title"
          name="title"
          onChange={this.onChange}
        />
        <input
          value={this.state.body}
          placeholder="add body"
          name="body"
          onChange={this.onChange}
        />
        <button onClick={this.onSubmit}>send</button>
      </React.Fragment>
    );
  }
}

export default Add;
