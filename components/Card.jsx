import { connect } from "react-redux";
const Card = (props) => {
  return (
    <div className="card bg-light mb-3" style={{ width: "100%" }}>
      <div className="card-header">
        Global
        <span
          className="green"
          style={{ fontWeight: "600", color: "#f00", marginLeft: "8px" }}
        >
          Live
        </span>
      </div>

      <div className="card-body">
        <div className="wrapper d-flex justify-content-center">
          <h5 className="card-title">Confirmed:</h5>
          <span
            className="font-weight-bold ml-2 text-primary"
            style={{ fontSize: "25px" }}
          >
            {props.main.confirmed.value}
          </span>
        </div>
        <div className="wrapper d-flex justify-content-center">
          <h5 className="card-title">Recovered:</h5>
          <span
            className="font-weight-bold ml-2 text-success"
            style={{ fontSize: "25px" }}
          >
            {props.main.recovered.value}
          </span>
        </div>
        <div className="wrapper d-flex justify-content-center">
          <h5 className="card-title">Deaths:</h5>
          <span
            className="font-weight-bold ml-2 text-danger"
            style={{ fontSize: "25px" }}
          >
            {props.main.deaths.value}
          </span>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    main: state.countReducer.main,
  };
};
export default connect(mapStateToProps)(Card);
