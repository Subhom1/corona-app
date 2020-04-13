import Head from "next/head";
import Router from "next/router";
import Nprogress from "nprogress";
import Navbar from "../components/Navbar";
Router.onRouteChangeStart = (url) => {
  // console.log(url);
  Nprogress.start();
};
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();
export default ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>Corona Tracker</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <h1 className="mt-5 pt-2">{title}</h1>
    {children}
    {/* <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright &copy; corona tracker app {new Date().getFullYear()}
        </p>
      </div>
    </footer> */}
  </React.Fragment>
);
