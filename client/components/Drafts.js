import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { _setBeers } from "../store/foodStore";
import { useSelector, useDispatch } from "react-redux";

export default function Drafts() {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.foodStore.beers);
  // const apps = foods.filter((food) => food.type === "app");
  // const entrees = foods.filter((food) => food.type === "entree");
  console.log("beers from comp beers", beers);

  useEffect(() => {
    async function loadBeers() {
      await dispatch(_setBeers());
    }
    loadBeers();
  }, []);

  return (
    <div id="beer-container">
      <Container maxWidth="sm">
        <div>
          <h2 style={{ textDecoration: "underline" }}>Beers On Draft</h2>
          <br />
          {beers.map((beer) => {
            return (
              <div key={beer.name} className="beer-item">
                <h4>{beer.name}</h4>
                <div>abv:{beer.abv}%</div>
                <div>{beer.cost}</div>
                <br />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
