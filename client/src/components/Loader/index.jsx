import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isLoading: state.loaderReducer.isLoading,
});

const Loader = ({ isLoading, children }) => (
  <React.Fragment>
    {isLoading && (
      <div className="preloader">
        <div className="centered loader loader-1">
          <div className="loader-outter" />
          <div className="loader-inner" />
        </div>
      </div>
    )}
    {children}
  </React.Fragment>
);

export default connect(mapStateToProps, null)(Loader);
