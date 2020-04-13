import { countActionTypes } from "./action";

const countInitialState = {
  main: {},
  country: {},
  countries: [],
};

export default (state = countInitialState, action) => {
  // console.log(action.payload, "payload");
  switch (action.type) {
    case countActionTypes.SHOW:
      return {
        ...state,
        main: action.payload,
      };
    case countActionTypes.SHOW_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case countActionTypes.SHOW_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};
