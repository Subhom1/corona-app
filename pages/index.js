import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { getRequest, showCountryData } from "../store/count/action";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Card from "../components/Card";

const Home = (props) => {
  useEffect(() => {
    // props.showCountryData(country);
  }, []);
  // console.log(props, "props index");
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
            <Card />
          </div>
          <div className="col-lg-6"></div>
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

// export async function getStaticProps() {
//   try {
//     const res = await fetch("https://covid19.mathdro.id/api/countries/usa");
//     const json = await res.json(); // better use it inside try .. catch
//     return {
//       props: {
//         data: json.confirmed.value,
//       },
//     };
//   } catch (err) {
//     console.error(err);
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     showCountryData: bindActionCreators(showCountryData, dispatch),
//   };
// };
const mapStateToProps = (state) => {
  return {
    main: state.countReducer.main,
  };
};
export default connect(mapStateToProps, null)(Home);
// export default Home;
