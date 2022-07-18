import React from "react";
import CompareView from "compare_view";
import Test from "./test";

const ReactApp: React.FC = () => {
    return (
        <div>
            <h1>A bit of React using compare_view</h1>
            {/* <Test /> */}
            <CompareView image_urls={["./cat.png", "./cat_grey.png"]} config={{ create_controls: true }} />
            {/* <CompareView /> */}
            {/* <CompareView image_urls={["./cat.png", "./cat_grey.png"]} /> */}
        </div>
    );
}

export default ReactApp;

