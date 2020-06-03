import React, { Component } from "react";

import {connect } from "react-redux";
import {fetchPost} from '../actions/postActions';

class Appp extends Component {
componentDidMount(){
    this.props.fetchPost(); 
}
componentWillReceiveProps(nextProps){
if(nextProps.newPost){
    this.props.posts.unshift(nextProps.newPost)
}
}
  render() {
    return (
        <React.Fragment>
          <h1>Post</h1>
         
          {this.props.posts.map(pos => (
            <div>
              <h3>{pos.title}</h3>
              <p>{pos.body}</p>
            </div>
          ))}
        </React.Fragment>
     
    );
  }
}
const mapStateToProps =state =>({
    posts:state.posts.items,
    newPost:state.posts.item
})
export default connect(mapStateToProps,{fetchPost})(Appp);
