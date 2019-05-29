import React from "react";
import { NavLink } from "react-router-dom";
import './PrismaLoader.scss';

const PrismaLoader = () => {

    return (
        <div className="loader-parent">
            <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
            </div>
        </div>
    );
};

export default PrismaLoader;
