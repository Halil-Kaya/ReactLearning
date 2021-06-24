import { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users />
      </div>
    );
  }
}

export default App;
