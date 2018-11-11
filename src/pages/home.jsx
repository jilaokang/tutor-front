import React, { Component } from "react";
import FooterNav from "../component/footer";
import utils from "../utils/utls";

class Home extends Component {
  componentWillMount() {
    if (!utils.formatCookie().token) this.props.history.push("/");
  }

  state = {};
  render() {
    return (
      <div>
        <div className="container" />
        <router-view />
        <FooterNav />
      </div>
    );
  }
}

export default Home;
