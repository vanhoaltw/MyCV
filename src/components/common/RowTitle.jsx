import React from "react";

const RowTitle = (props) => {
  const { title,description } = props;
  return (
    <div id="title">
      <h1>{title}</h1>
      <p>
          {description}
      </p>
    </div>
  );
};

export default RowTitle;
