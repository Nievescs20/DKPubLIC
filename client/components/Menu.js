import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { _setFoods } from "../store/foodStore";
import { useSelector, useDispatch } from "react-redux";

export default function Menu() {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foodStore.foods);
  const apps = foods.filter((food) => food.type === "app");
  const entrees = foods.filter((food) => food.type === "entree");
  console.log("foods from comp foods", foods);

  useEffect(() => {
    async function loadFoods() {
      await dispatch(_setFoods());
    }
    loadFoods();
  }, []);

  return (
    <div id="menu-container">
      <Container maxWidth="sm">
        <div>
          <h2 style={{ textDecoration: "underline" }}>Appetizers</h2>
          <br />
          {apps.map((app) => {
            return (
              <div key={app.name} className="menu-item">
                <h4>{app.name}</h4>
                <div>{app.description}</div>
                <div>{app.cost}</div>
              </div>
            );
          })}
        </div>
      </Container>
      <Container maxWidth="sm">
        <div>
          <h2 style={{ textDecoration: "underline" }}>Entrees</h2>
          <br />
          {entrees.map((entree) => {
            return (
              <div key={entree.name} className="menu-item">
                <h4>{entree.name}</h4>
                <div>{entree.description}</div>
                <div>{entree.cost}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
