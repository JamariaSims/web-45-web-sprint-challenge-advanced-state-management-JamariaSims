import React, { Component } from "react";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";
import { CallAction } from "./actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.CallAction();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { CallAction })(App);
//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
