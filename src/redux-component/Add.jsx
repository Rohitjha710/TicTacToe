import React, { Component } from "react";
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';
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
   this.props.createPost(post)
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
const mapStateToProps =state =>({
    posts:state.posts.items
})
export default connect(mapStateToProps,{createPost})(Add);
