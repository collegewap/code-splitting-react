import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import loadable from "@loadable/component";
import Loading from "./Loading";

const CatImage = loadable(() => import("./CatImage.js"), {
  fallback: <Loading />,
});

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Dog Image</Link>
        </li>
        <li>
          <Link to="cat">Cat Image</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cat" element={<CatImage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
