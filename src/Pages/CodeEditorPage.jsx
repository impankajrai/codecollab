import React from "react";
import { useParams, useLocation } from "react-router-dom";

function CodeEditorPage() {
  let { id } = useParams();
  let { state } = useLocation();
  const user = { id, username: state.username };

  return (
    <div style={{ color: "wheat" }}>
      {user.username} and room id is {user.id}
    </div>
  );
}

export default CodeEditorPage;
