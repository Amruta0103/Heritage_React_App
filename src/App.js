import React, { useState } from "react";
import "./styles.css";

const mylist = {
  HOME: [
    {
      head: "FORTS OF MAHARASHTRA",
      info:
        "There are nearly 350 forts in Maharashtra, so it is said that forts are the glory of Maharashtra. Most of these forts are associated with the great Maratha ruler, Chhatrapati Shivaji Maharaj. It is believed that he developed as many as thirteen forts.Vijaydurg fort is regarded to be the best sea fort developed by Shivaji. Every fort has temple inside that was a powerful inspiration to the Maratha fighters. 510 km away from Mumbai is the famous Sindhudurg and Vijaydurg forts. This twin fort was constructed with the special guidelines from Shivaji. This fort is famous for its serene environmental beauty and its historic importance.Shivner fort is the fort where Shivaji was born. This fort is nearly about 120 km from Pune. Pratapgad fort reminds the fiery battle fought between Shivaji and Afzal Khan. One must see the 300-year old fine architectural fort of Murud - Janjira fort, Lohagad and Visapur Forts, Harishchandragad Fort, Arnala Fort and Ajinkyatara Fort are ideal for trekking. Adventure lovers must visit these forts."
    }
  ],
  SINHAGAD: [
    {
      head: "SINHAGAD",
      info:
        "Sinhagad is a hill fortress located at around 35 km southwest of the city of Pune, India. Some of the information available at this fort suggests that the fort could have been built 2000 years ago. The caves and the carvings in the Kaundinyeshwar temple stand as proofs for the same. Previously known as Kondhana, the fort had been the site of many battles, most notably the Battle of Sinhagad in 1670. Perched on an isolated cliff of the Bhuleswar range in the Sahyadri Mountains, the fort is situated on a hill about 760 metres above ground and 1,312 metres above mean sea level.The Sinhagad (Lion's Fort) was strategically built to provide natural protection due to its very steep slopes. The walls and bastions were constructed only at key places. There are two gates to enter the fort, the Kalyan Darwaza and Pune Darwaza which are positioned at the south east and north-east ends respectively. The fort was also strategically located at the centre of a string of other Maratha Empire forts such as Rajgad Fort, Purandar Fort and Torna Fort."
    }
  ],
  RAIGAD: [
    {
      head: "RAIGAD",
      info:
        "Raigad is a hill fort situated in Mahad, Raigad district of Maharashtra, India. Many constructions and structures that we see on raigad were built by Chhatrapati Shivaji when he made it his capital in 1674 when he was crowned the King of the Maratha Kingdom which later developed into the Maratha Empire, eventually covering much of western and central India. The fort rises 820 metres (2,700 ft) above the sea level and is located in the Sahyadri mountain range. There are approximately 1737 steps leading to the fort.The Raigad Fort was built by Shivaji and the chief architect/engineer was Hiroji Indulkar. The main palace was constructed using wood, of which only the base pillars remain. The main fort ruins consist of the queen's quarters, six chambers, with each chamber having its own private restroom. In addition, ruins of three watch towers can be seen directly in front of the palace grounds out of which only two remain as the third one was destroyed during a bombardment. The Raigad Fort also has ruins of a market which was accessible to horseback riders. The fort also overlooks an artificial lake known as the Ganga Sagar Lake. The only main pathway to the fort passes through the 'Maha Darwaja' (Huge Door) which was previously closed at sunset. The Maha Darwaja has two huge bastions on both sides of the door which are approximately 65–70 feet in height. The top of the fort is 600 ft above this door. The King's Darbar, inside the Raigad Fort has a replica of the original throne that faces the main doorway called the Nagarkhana Darwaja. This enclosure had been acoustically designed to aid hearing from the doorway to the throne. A secondary entrance, called the Mena Darwaja, was supposedly the private entrance for the royal ladies of the fort that lead to the queen's quarters. The convoy of the king and the king himself used the Palkhi Darwaja. To the right of Palkhi Darwaja, is a row of three dark and deep chambers. Historians believe that these were the granaries for the fort. From the fort, one can view the execution point called Takmak Tok, a cliff from which sentenced prisoners were thrown to their death. This area has been fenced off."
    }
  ],
  AJINKYATARA: [
    {
      head: "AJINKYATARA",
      info:
        "Ajinkyatara ( meaning 'The Impregnable Star') is a fort on one of the seven mountains surrounding the city of Satara in the Sahayadri Mountains of Maharashtra, India. It is a 16th-century fort. The fort is located at Ajinkyatara Mountain, which is 3,300 feet high. After the death of Shivaji Maharaj, Aurangzeb conquered Satara fort, which was later won by Parshuram Pratinidhi in 1706. In 1708, Shahu Maharaj was crowned at this fort."
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
      <h1
        style={{ color: "rgb(228, 151, 36)", margin: "0px", padding: "1rem" }}
      >
        Heritage
      </h1>
      <h3 style={{ color: "white", margin: "0px" }}>
        -- FORTS OF MAHARASHTA --
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
        {mylist[selectedType].map((item) => (
          <div className="head-font head">{item.head}</div>
        ))}
        {mylist[selectedType].map((item) => (
          <div className="info-font info">{item.info}</div>
        ))}
      </div>
    </div>
  );
}
