import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { _setWines } from "../store/foodStore";
import { useSelector, useDispatch } from "react-redux";

export default function Wines() {
  const dispatch = useDispatch();
  const wines = useSelector((state) => state.foodStore.wines);
  // const apps = foods.filter((food) => food.type === "app");
  // const entrees = foods.filter((food) => food.type === "entree");
  console.log("wines from comp wines", wines);

  useEffect(() => {
    async function loadWines() {
      await dispatch(_setWines());
    }
    loadWines();
  }, []);

  return (
    <div id="wine-container">
      <Container maxWidth="sm">
        <div>
          <h2 style={{ textDecoration: "underline" }}>Wines By The Glass</h2>
          <br />
          {wines.map((wine) => {
            return (
              <div key={wine.name} className="beer-item">
                <h4>{wine.name}</h4>
                <div>{wine.cost}</div>
                <br />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
