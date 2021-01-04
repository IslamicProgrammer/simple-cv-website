import React from "react";

function PortfolioCard({ id, name, link, desc, tech, imageLink, responsive }) {
  return (
    <div className="card">
      <a href={link} target="_blank">
        <div
          className="card-header"
          style={{ background: `url(${imageLink})` }}
        ></div>
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
          <p className="card-desc">Description: {desc}</p>
          <p className="tech">
            {tech.map((item) => (
              <span>{item} </span>
            ))}
          </p>
          <p className="responsive">Responsive: {responsive ? "✅" : "❌"}</p>
        </div>
      </a>
    </div>
  );
}

export default PortfolioCard;
