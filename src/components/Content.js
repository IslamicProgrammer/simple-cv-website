import React from "react";
import { v4 as uid } from "uuid";

function Content({ title, body, type, id }) {
  return (
    <div className="container">
      <div className="content">
        <h2 className="title">{title}</h2>
        <ul className="content-body">
          {body.map((item, index) => {
            if (type === "pragraph") {
              return (
                <p key={uid()} className="content-p-body">
                  {item}
                </p>
              );
            } else {
              return (
                <li key={uid()} className="content-li-body">
                  {index + 1 + ". "}
                  {item}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default Content;
