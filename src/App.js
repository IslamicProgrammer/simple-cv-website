import { useState } from "react";
import Content from "./components/Content";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import "./styles/App.scss";
import { data as base } from "./data";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Portfilio from "./components/Portfilio";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [data, setData] = useState(base);
  const [contentType, setContentType] = useState("about");

  const contentTypeHand = () => {
    if (contentType === "about") {
      {
        return data.map((data) => {
          return (
            <Content
              title={data.title}
              body={data.body}
              type={data.type}
              key={data.id}
              id={data.id}
            />
          );
        });
      }
    } else {
      return <Portfilio />;
    }
  };

  return (
    <div className="App">
      <Navbar
        contentType={contentType}
        setContentType={setContentType}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {contentTypeHand()}
      <Footer />
    </div>
  );
}

export default App;
