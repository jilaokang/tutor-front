import React, { Component } from "react";
import Search from "../../component/search";
import Store from "../../server/api";

import WantedCard from "../../component/wantedcard";

class Wanted extends Component {
  state = {
    wantedList: []
  };

  async componentWillMount() {
    this.setState({ wantedList: await Store.wantedData() });
  }

  render() {
    return (
      <div className="container">
        <Search />
        {this.state.wantedList.map(v => (
          <WantedCard value={v} key={v._id} />
        ))}
      </div>
    );
  }
}

export default Wanted;
