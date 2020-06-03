import React, { Component } from "react";

import {connect } from "react-redux";
import {fetchPost} from '../actions/postActions';

class Appp extends Component {
componentDidMount(){
    this.props.fetchPost(); 
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
    posts:state.posts.items
})
export default connect(mapStateToProps,{fetchPost})(Appp);
