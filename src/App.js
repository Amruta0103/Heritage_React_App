import React, { useState } from "react";
import "./styles.css";

const mylist = {
  HOME: [
    {
      head:
        " Hello !! And Welcome !! Everyone To This Space Where We Help You Beautify Your Spaces !!",
      info:
        "There are a plenty of options to grow various plants,herbs and creepers inside the home spaces, balconies and kitchen gardens. You can use them to fill in the empty spaces and beautify. Here are a few suggestions from us to help you begin eith your own beautiful spaces. HAPPY PLANTING :-) "
    }
  ],
  FLORAL: [
    {
      head: "ROSE",
      info:
        "The plant flower that fascinates everyone is no doubt the first in this list. It is a very easily available and easy to grow plant in your balcony."
    },
    {
      head: "LILY",
      info:
        "A pleasant floral plant that mesmerises everyone with its awesome looks. It is also easily available and easy to grow."
    },
    {
      head: "HIBISCUS",
      info:
        "This red flower is just awesome and doesn't require any extra attention and grows perfectly with basic gardening skills."
    },
    {
      head: "PERIWINKLE",
      info:
        "A small and simple flower that catches your eye easily. Also an easily available plant and easy to grow in your home."
    }
  ],
  HERBS: [
    {
      head: "TULSI",
      info:
        "It is a very common plant that we find in the Indian households. There are a numerous benefits of this plant and surely it's the one that everyone should have in their kitchen-gardens."
    },
    {
      head: "MINT",
      info:
        "Commonly known as Pudina is an important part of Indian cuisine that elevates the taste-buds of everyone. It is also easily available and easy to grow plant in the houses."
    },
    {
      head: "AJWAIN",
      info:
        "A plant that is very beneficial for health and is one of plants to have on the checklist for kitchen-gardens."
    }
  ],
  CREEPERS: [
    {
      head: "MADHU-MALATI",
      info:
        "A creeper with cute bunches of small flowers to make your mood fresh and happy. It is very easily available and easy to grow in your home spaces."
    },
    {
      head: "MONEY PLANT",
      info:
        "A very common and easily available plant to have in your homes. It is a best option for decorating empty spaces in the home."
    }
  ]
};

export default function App() {
  const [selectedType, setType] = useState("HOME");
  function typeClickHandler(type) {
    setType(type);
  }

  return (
    <div className="App">
      <h1 style={{ color: "BLACK", margin: "0px", padding: "1rem" }}>
        PLANT PARADISE
      </h1>
      <h3 style={{ color: "white", margin: "0px" }}>
        BEAUTIFY YOUR SPACES WITH NATURE
      </h3>
      <div className="main-list-box">
        {Object.keys(mylist).map((type) => (
          <button
            className="main-list-options"
            onClick={() => typeClickHandler(type)}
            style={{ cursor: "pointer", margin: "1rem 0.5rem" }}
          >
            {type}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {mylist[selectedType].map((item) => (
            <li
              key={item.head}
              style={{
                textAlign: "center",
                color: "white",
                listStyle: "none",
                padding: "1rem",
                margin: "auto",
                border: "1px solid",
                borderRadius: "0.5rem",
                width: "700px"
              }}
            >
              {" "}
              <div className="head-font">{item.head}</div>
              <div className="info-font">{item.info}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
