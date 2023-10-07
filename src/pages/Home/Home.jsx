import React from "react";
import Button from "../../components/home/Button/Button";
import "./Home.css";
import { quotes } from "./data.js";
import Carousel from "../../components/home/Carousel/Carousel";
import Flex from "../../styled-components/Flex"

const Home = () => {
  return (
    <Flex direction="column" justify="space-between">
      <div className="home-container">
        <div className="hero-box">
          <h1>Do you want to see a beautiful picture?</h1>
          <p className="text">
            Each day a different image or photograph of our fascinating
            universe...
          </p>
          <Button label={"Explore"} />
        </div>
        <div className="quote-carousel-box">
          <div className="quote">
            {quotes.map((quote) => (
              <blockquote key={quote.id}>
                <p>{quote.quote}</p>
                <cite>{quote.author}</cite>
              </blockquote>
            ))}
          </div>
          <Carousel />
        </div>
      </div>
    </Flex>
  );
};

export default Home;
