import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PicturePoint from "./pages/PicturePoint";

// TODO: Change so that it takes "data" as argument
// so users can add default data and set editable to false
ReactDOM.render(
    <PicturePoint
        src_image={
            "https://www.jackjones.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-pim-catalog/default/dwe2bdcf5f/pim-static/large/12160583_DarkGrey_003_ProductLarge.jpg?sw=685"
        }
        editable={true}
    />,
    document.getElementById("root")
);
