import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const SET_FOODS = "SET_FOODS";
const SET_BEERS = "SET_BEERS";
const SET_WINES = "SET_WINES";

/**
 * ACTION CREATORS
 */
const setFoods = (foods) => ({
  type: SET_FOODS,
  foods,
});

const setBeers = (beers) => ({
  type: SET_BEERS,
  beers,
});

const setWines = (wines) => ({
  type: SET_WINES,
  wines,
});

/**
 * THUNK CREATORS
 */
export const _setFoods = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/foods");
      dispatch(setFoods(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const _setBeers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/beers");
      dispatch(setBeers(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const _setWines = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/wines");
      dispatch(setWines(data));
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * REDUCER
 */

const initialState = {
  foods: [],
  beers: [],
  wines: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FOODS:
      return { ...state, foods: action.foods };
    case SET_BEERS:
      return { ...state, beers: action.beers };
    case SET_WINES:
      return { ...state, wines: action.wines };
    default:
      return state;
  }
}
