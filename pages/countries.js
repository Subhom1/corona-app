import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import {
  showAllCountryName,
  getRequest,
  showCountryData,
} from "../store/count/action";
const Countries = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    props.showAllCountryName(props.countryArr);
  }, []);

  const handleInputChange = (event) => {
    setSelectedCountry(event.target.value);
    if (event.target.value != "") {
      getRequest(props.countriesUrl, event.target.value).then((res) => {
        if (res.status === 200) {
          props.showCountryData(res.data);
        }
      });
    }
  };
  const { confirmed, recovered, deaths } = props.country;
  return (
    <Layout>
      <div className="container">
        <div className="row p-3">
          <div className="col-lg-6 d-flex align-items-center mb-3">
            <select
              className="custom-select"
              onChange={handleInputChange}
              value={selectedCountry}
            >
              <option value="">Select Any Country</option>
              {props.countries.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-6">
            <table className="table bg-primary">
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">Death</th>
                </tr>
              </thead>
              <tbody>
                {confirmed ? (
                  <tr className="table-light">
                    <th scope="row">{selectedCountry || "Country"}</th>
                    <td>{selectedCountry ? confirmed.value : "value"}</td>
                    <td>{selectedCountry ? recovered.value : "value"}</td>
                    <td>{selectedCountry ? deaths.value : "value"}</td>
                  </tr>
                ) : (
                  <tr className="table-light">
                    <th scope="row">Country</th>
                    <td>value</td>
                    <td>value</td>
                    <td>value</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getStaticProps() {
  try {
    const res = await fetch("https://covid19.mathdro.id/api/countries");
    const json = await res.json(); // better use it inside try .. catch
    return {
      props: {
        countryArr: json.countries,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
const mapStateToProps = (state) => {
  return {
    countriesUrl: state.countReducer.main.countries,
    countries: state.countReducer.countries,
    country: state.countReducer.country,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showCountryData: bindActionCreators(showCountryData, dispatch),
    showAllCountryName: bindActionCreators(showAllCountryName, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Countries);
