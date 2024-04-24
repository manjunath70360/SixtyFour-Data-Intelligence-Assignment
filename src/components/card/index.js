import React, { useRef, useState} from "react";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

import "./index.css"


const cardContainerList = [
    {
        imgUrl: 'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876035/images_dkq7v2.jpg',
        cardTitle:'State of Markets',
        description: 'The market capitalisation of indian stocks crossed US$4.5 trillion in january',
    },
    {
        imgUrl:'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876035/images_1_lwf8qh.jpg' ,
        cardTitle:'The Central Capex surge',
        description: 'The last few years have seen a very substantial step up in captial'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876035/images_zgwjdw.png',
        cardTitle:'Direct Taxes and Bussiness Cycle',
        description: 'The share of direct taxes in total tax collections of the government is'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876035/images_2_aeqysx.jpg',
        cardTitle:'Banking Monitor',
        description: 'Credit growth has remained broadly stable in recent weeks at just'
    },

    {
        imgUrl: 'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876035/images_9_i7xnjr.jpg',
        cardTitle:'State of Markets',
        description: 'The market capitalisation of indian stocks crossed US$4.5 trillion in january'
    },
    {
        imgUrl:'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876035/images_5_fpcbjo.jpg' ,
        cardTitle:'The Central Capex surge',
        description: 'The last few years have seen a very substantial step up in captial'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876034/images_6_kly6tc.jpg',
        cardTitle:'Direct Taxes and Bussiness Cycle',
        description: 'The share of direct taxes in total tax collections of the government is'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876034/images_7_c9kipx.jpg',
        cardTitle:'Banking Monitor',
        description: 'Credit growth has remained broadly stable in recent weeks at just'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876034/images_10_cihcmn.jpg',
        cardTitle:'State of Markets',
        description: 'The market capitalisation of indian stocks crossed US$4.5 trillion in january'
    },
    {
        imgUrl:'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876035/images_zgwjdw.png' ,
        cardTitle:'The Central Capex surge',
        description: 'The last few years have seen a very substantial step up in captial'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876034/images_8_zaqlml.jpg',
        cardTitle:'Direct Taxes and Bussiness Cycle',
        description: 'The share of direct taxes in total tax collections of the government is'
    },
    {
        imgUrl: 'https://res.cloudinary.com/dwwunc51b/image/upload/v1713876034/images_6_kly6tc.jpg',
        cardTitle:'Banking Monitor',
        description: 'Credit growth has remained broadly stable in recent weeks at just'
    },
] 


const Card = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [showAllCards, setShowAllCards] = useState(false);
    const listRef = useRef(null);
  

  
    const scrollLeft = () => {
      if (listRef.current) {
        listRef.current.scrollBy({
          left: -250,
          behavior: "smooth",
        });
      }
      setCurrentCard((prevCard) => Math.max(prevCard - 1, 0));
    };
  
    const scrollRight = () => {
      if (listRef.current) {
        listRef.current.scrollBy({
          left: 250,
          behavior: "smooth",
        });
      }
      setCurrentCard((prevCard) =>
        Math.min(prevCard + 1, cardContainerList.length - 1)
      );
    };
  
    const handleDotClick = (index) => {
      setCurrentCard(index);
      const scrollPosition = index * 250;
      if (listRef.current) {
        listRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    };
  
    const handleViewMore = () => {
        setShowAllCards((prevShowAllCards) => !prevShowAllCards);
      };
  
    return (
      <div className="card-container">
        <div className="card-container-list">
          <button type="button" className={showAllCards ? "no-arrow" : "arrow-btn"} onClick={scrollLeft}>
            <FaArrowAltCircleLeft className="arrow" size={20} />
          </button>
          <ul className={`list-card ${showAllCards ? "show-all" : ""}`} ref={listRef}>
            {cardContainerList.map((eachCard, index) => (
              <li key={index} className="card">
                <img src={eachCard.imgUrl} className="card-img" alt="img" />
                <div className="card-text">
                  <h3 className="card-title">{eachCard.cardTitle}</h3>
                  <p className="card-para">{eachCard.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <button type="button" className={showAllCards ? "no-arrow" : "arrow-btn"} onClick={scrollRight}>
            <FaArrowAltCircleRight className="arrow" size={20} />
          </button>
        </div>
       {!showAllCards &&  <div className="dot-container">
          {cardContainerList.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentCard ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div> }
        {!showAllCards ? (
          <button type="button" className="view-btn" onClick={handleViewMore}>
            View More
          </button>
        ) : <button type="button" className="view-btn" onClick={handleViewMore}>
        View Less
      </button>}
      </div>
    );
  };
  
  export default Card;