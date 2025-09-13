import React, { useState } from "react";

import Comments from '../components/Comments';
import PostActions from '../components/PostActions';
import PostContent from '../components/PostContent';
import PostHeader from '../components/postheader';

function Post() {
  const [likes, setLikes] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const addComment = (text) => {
    setComments([
      ...comments,
      { id: Date.now(), text, replies: [] }
    ]);
  };

  const deleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const replyComment = (id, text) => {
    setComments(
      comments.map((c) =>
        c.id === id
          ? { ...c, replies: [...c.replies, { id: Date.now(), text }] }
          : c
      )
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Post en React",
        text: "Mira este post que hice en React 🚀",
        url: window.location.href,
      });
    } else {
      alert("Tu navegador no soporta la API de compartir");
    }
  };

  return (
    <div className="card mb-4 shadow-sm">
      <PostHeader />
      <PostContent />

      {/* Likes count  */}
      <div className="px-3 py-1 text-muted">{likes} Me gusta</div>

      <PostActions
        onLike={() => setLikes(likes + 1)}
        onToggleComments={() => setShowComments(!showComments)}
        onShare={handleShare}
      />

      {/* Contador de comentarios */}
      <div className="px-3 py-1 text-muted">
        {comments.length} Comentario(s)
      </div>

      {/* Sección de comentarios */}
      {showComments && (
        <Comments
          comments={comments}
          addComment={addComment}
          deleteComment={deleteComment}
          replyComment={replyComment}
        />
      )}
    </div>
  );
}

export default Post;
