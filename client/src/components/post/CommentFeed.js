import React, { Component } from "react";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props;
    return comments.map(comment => (
      <CommentItem comment={comment} postId={postId} key={comment._id} />
    ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
};
export default CommentFeed;
