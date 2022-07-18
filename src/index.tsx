import React from "react";
import { createRoot } from "react-dom/client";
import ReactApp from "./app";

const container = document.getElementById("react-root") as HTMLElement;
const root = createRoot(container);
root.render(<ReactApp />);


// import React from 'react'
// import { ReactFromModule } from 'compare_view'
// console.log(React === ReactFromModule) // true :)
// console.log(React);
// console.log(ReactFromModule);
