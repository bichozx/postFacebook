import React, { useState } from "react";

function Comments({ comments, addComment, deleteComment, replyComment }) {
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    addComment(newComment);
    setNewComment("");
  };

  const handleReply = (id) => {
    if (replyText.trim() === "") return;
    replyComment(id, replyText);
    setReplyingTo(null);
    setReplyText("");
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit} className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Escribe un comentario..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </form>

      {comments.map((c) => (
        <div key={c.id} className="mb-2">
          <div className="d-flex justify-content-between">
            <span>
              <strong>Usuario</strong>: {c.text}
            </span>
            <button
              className="btn btn-sm btn-link text-danger"
              onClick={() => deleteComment(c.id)}
            >
              Eliminar
            </button>
          </div>
          <div className="ms-3">
            {c.replies.map((r) => (
              <div key={r.id} className="text-muted small mb-1">
                ↪ <strong>Usuario</strong>: {r.text}
              </div>
            ))}
          </div>
          {replyingTo === c.id ? (
            <div className="ms-3">
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                placeholder="Responder..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <button
                className="btn btn-sm btn-primary"
                onClick={() => handleReply(c.id)}
              >
                Enviar
              </button>
              <button
                className="btn btn-sm btn-secondary ms-1"
                onClick={() => setReplyingTo(null)}
              >
                Cancelar
              </button>
            </div>
          ) : (
            <button
              className="btn btn-sm btn-link"
              onClick={() => setReplyingTo(c.id)}
            >
              Responder
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Comments;
