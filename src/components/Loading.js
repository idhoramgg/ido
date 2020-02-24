import React from "react";

export const Loading = () => {
  return (
    <div className="text-center">
      <div className="spinner-grow text-dark fast" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  
  );
};

export default Loading;
