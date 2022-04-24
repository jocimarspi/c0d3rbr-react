import React, { cloneElement } from "react";

const Family = (props) => {
  return (
    <div>
      {props.children.map((child, index) => {
        return cloneElement(child, { ...props, key: index});
      })}
    </div>
  );
};

export default Family;
