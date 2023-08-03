import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import data from "./components/data";
import axios from './axios'
const TinderCards = () => {
  const [person, setPerson] = useState([]);

  useEffect( () => {
    async function FetchData () {
      const result = await axios.get("/tinder-card")
      console.log(result.data)
      const finalData = result?.data.filter( (item, i) => {
        return i >= 8 ? null : item 
      })
      setPerson(finalData)
    }
    FetchData()
  }, []) 

  function Swipe(dir) {
    console.log(dir);
  }
  return (
    <div className="tinder-card mt-5">
      <div className="container">
        {person &&
          person?.map((item) => {
            return (
              <TinderCard
                className="swipe"
                key={item.id}
                onSwipe={(dir) => {
                  console.log(dir);
                }}
                preventSwipe={["up", "down"]}
                onCardLeftScreen={() => {}}
                children={
                  <div className="card">
                    <img className="card-img-top" src={item.url} alt={item.name} />
                    <h3>{item.name}</h3>
                  </div>
                }
              />
            );
          })}
          {!person.length && <h3 className="text-muted">No Data Found</h3>}
      </div>
    </div>
  );
};

export default TinderCards;
