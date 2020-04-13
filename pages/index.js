import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { getRequest, showCountryData } from "../store/count/action";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Card from "../components/Card";

const Home = (props) => {
  useEffect(() => {
    props.showCountryData(props.data);
  }, []);

  return (
    <Layout>
      {/* {props.main ? (
        <img src={props.main.image} alt="img" />
      ) : (
        <p>Failed to Load ...</p>
        )} */}
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-6 d-flex  justify-content-center">
            <Card main={props.main} title="Global" />
          </div>
          <div className="col-lg-6 d-flex  justify-content-center">
            <Card main={props.data} title="India" />
          </div>
        </div>
        <div className="row p-5 justify-content-center text-center">
          <p>
            Made with ❤️ in India.
            <br />
            Powered by Next.js , a react server side framework. <br />
            github @subhom1
          </p>
        </div>
      </div>

      <style jsx>{`
        img {
          width: 50%;
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("https://covid19.mathdro.id/api/countries/india");
    const json = await res.json(); // better use it inside try .. catch
    return {
      props: {
        data: json,
      },
    };
  } catch (err) {
    console.error(err);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCountryData: bindActionCreators(showCountryData, dispatch),
  };
};
const mapStateToProps = (state) => {
  return {
    country: state.countReducer.country,
    main: state.countReducer.main,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
