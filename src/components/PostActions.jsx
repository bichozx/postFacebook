import React from "react";

function PostActions({ onLike, onToggleComments, onShare }) {
  return (
    <div className="d-flex justify-content-around border-top border-bottom p-2">
      <button className="btn btn-light" onClick={onLike}>
        👍 Me gusta
      </button>
      <button className="btn btn-light" onClick={onToggleComments}>
        💬 Comentar
      </button>
      <button className="btn btn-light" onClick={onShare}>
        🔄 Compartir
      </button>
    </div>
  );
}

export default PostActions;
