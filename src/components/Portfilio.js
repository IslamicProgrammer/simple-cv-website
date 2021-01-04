import React from "react";
import PortfolioCard from "./PortfolioCard";
import { v4 as uid } from "uuid";
import { portfolioData } from "../portfolioData";
import { useState } from "react";

function Portfilio() {
  const [cardData, setCardData] = useState(portfolioData);

  return (
    <div className="container">
      <div className="portfolio">
        <h1 className="title">Portfolio</h1>
        <div className="row">
          {cardData.map((item) => (
            <PortfolioCard
              key={item.id}
              name={item.name}
              link={item.link}
              tech={item.tech}
              desc={item.desc}
              imageLink={item.imageLink}
              responsive={item.responsive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfilio;
