import React from 'react';
import {connect} from "react-redux";

function Loader({isLoading, children}) {
    return (
        <React.Fragment>
            {
                isLoading && <div className="preloader">
                    <div className="centered loader loader-1">
                        <div className="loader-outter"/>
                        <div className="loader-inner"/>
                    </div>
                </div>
            }
            {children}
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    isLoading: state.loaderReducer.isLoading
});

export default connect(mapStateToProps, null)(Loader);

