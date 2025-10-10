import React, { useState } from "react";

interface Comment {
  author: string;
  datetime: string;
  text: string;
}

interface CommentsSectionProps {
  comments: Comment[];
  onAddComment: (comment: string) => void;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments, onAddComment }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      {comments.map((comment, idx) => (
        <div key={idx} className="comment mb-2">
          <strong>{comment.author}</strong> ({comment.datetime}):<br />
          {comment.text}
        </div>
      ))}
      <div className="d-flex mt-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Add a comment ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            onAddComment(input);
            setInput("");
          }}
          disabled={!input.trim()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CommentsSection;
