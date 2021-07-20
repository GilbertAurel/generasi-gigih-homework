import React from "react";
import { SPOTIFY_AUTH_URL } from "constants/urls";

function Index() {
  return (
    <div>
      <a href={SPOTIFY_AUTH_URL}>login</a>
    </div>
  );
}

export default Index;
