import React, { Component } from "react";
import Search from "../../component/search";
import Store from "../../server/api";
import RecruitCard from "../../component/recruitcard";

class Recurit extends Component {
  state = {
    recruitList: []
  };

  async componentDidMount() {
    this.setState({ recruitList: await Store.recruitData() });
  }

  render() {
    return (
      <div className="container">
        <Search />
        {this.state.recruitList.map(v => (
          <RecruitCard value={v} key={v._id} />
        ))}
      </div>
    );
  }
}

export default Recurit;
