import React from "react";
import { NavLink } from "react-router-dom";
import './Loader.scss';
import img from "../../resources/path1580.png"

const Loader = () => {

    return (
        <div className="page piano">
            <ol className="scale-1">
                <li data-note="f">&nbsp;&nbsp;</li>
                <li data-note="fs" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="g">&nbsp;&nbsp;</li>
                <li data-note="gs" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="a">&nbsp;&nbsp;</li>
                <li data-note="as" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="b">&nbsp;&nbsp;</li>
            </ol>

            <ol className="scale-2">
                <li data-note="c">&nbsp;&nbsp;</li>
                <li data-note="cs" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="d">&nbsp;&nbsp;</li>
                <li data-note="ds" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="e">&nbsp;&nbsp;</li>
                <li data-note="f">&nbsp;&nbsp;</li>
                <li data-note="fs" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="g">&nbsp;&nbsp;</li>
                <li data-note="gs" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="a">&nbsp;&nbsp;</li>
                <li data-note="as" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="b">&nbsp;&nbsp;</li>
            </ol>
            <ol className="scale-2">
                <li data-note="c">&nbsp;&nbsp;</li>
                <li data-note="cs" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="d">&nbsp;&nbsp;</li>
                <li data-note="ds" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="e">&nbsp;&nbsp;</li>
                <li data-note="f">&nbsp;&nbsp;</li>
                <li data-note="fs" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="g">&nbsp;&nbsp;</li>
                <li data-note="gs" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="a">&nbsp;&nbsp;</li>
                <li data-note="as" className="ebony">&nbsp;&nbsp;</li>
                <li data-note="b">&nbsp;&nbsp;</li>
            </ol>
        </div>
    );
};

export default Loader;
