import fetch from "isomorphic-unfetch";
export const countActionTypes = {
  SHOW: "SHOW_DATA",
  SHOW_COUNTRY: "SHOW_COUNTRY_DATA",
  SHOW_COUNTRIES: "SHOW_COUNTRIES",
};

export const showAll = (data) => (dispatch) => {
  return dispatch({ type: countActionTypes.SHOW, payload: data });
};
export const showAllCountryName = (data) => (dispatch) => {
  return dispatch({ type: countActionTypes.SHOW_COUNTRIES, payload: data });
};
export const showCountryData = (data) => (dispatch) => {
  return dispatch({ type: countActionTypes.SHOW_COUNTRY, payload: data });
};

export const getRequest = async (api_url, endpoint) => {
  let finalURL = api_url + "/" + endpoint;
  // console.log(finalURL, "api url");
  return fetch(finalURL)
    .then((response) => {
      return response.json().then((jsonData) => {
        return {
          data: jsonData,
          status: response.status,
        };
      });
    })
    .catch((error) => console.error("Error:", error));
  // try {
  //   const res = await fetch(finalURL);
  //   const json = await res.json(); // better use it inside try .. catch
  //   return {
  //     data: json,
  //   };
  // } catch (err) {
  //   console.error(err);
  // }
};
