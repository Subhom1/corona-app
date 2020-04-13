import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store/store";
import { showAll } from "../store/count/action";
import "../scss/material_bootswatch.scss";

const MyApp = (props) => {
  console.log(props, "_app.js props");
  const { Component, pageProps, store } = props;
  store.dispatch(showAll(props.data));
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
MyApp.getInitialProps = async () => {
  try {
    const res = await fetch("https://covid19.mathdro.id/api");
    const json = await res.json(); // better use it inside try .. catch
    return {
      data: json,
    };
  } catch (err) {
    console.error(err);
  }
};

export default withRedux(initStore)(MyApp);
