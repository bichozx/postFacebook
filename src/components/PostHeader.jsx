import React from "react";

function PostHeader() {
  return (
    <div className="card-header d-flex align-items-center">
      <img
        src="https://randomuser.me/api/portraits/women/2.jpg"
        alt="user"
        className="rounded-circle me-2"
      />
      <div>
        <strong>Julier Ricos Postres</strong>
        <div className="text-muted" style={{ fontSize: "0.8rem" }}>
          Hace 2 horas
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
