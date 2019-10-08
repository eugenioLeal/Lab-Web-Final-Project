import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar";
// import SearchBox from "./searchbox";
import Queue from "./queue";
import TopSearchList from "./topsearch";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <h1>Party Name</h1>
      {/* <SearchBox /> */}
      <Queue></Queue>
      {/* <TopSearchList></TopSearchList> */}
    </div>
  );
}

export default App;
