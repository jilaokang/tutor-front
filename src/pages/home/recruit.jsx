import React, { Component } from "react";
import Search from "../../component/search";
import Store from "../../server/api";

class Recurit extends Component {
  state = {
    recruitList: ["aa", "bb"]
  };

  async componentDidMount() {
    this.setState({ recruitList: await Store.recruitData() });
  }

  render() {
    return (
      <div className="container">
        <Search />
        {this.state.recruitList.map(v => (
          <div className="card" style={{ width: "100%", marginBottom: "8px" }}>
            <div className="card-body">
              <h5 className="card-title">{v.subject}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {v.grade} {v.salary}元/天
              </h6>
              <p className="card-text">{v.introduce}</p>
              <a href={"tel:" + v.tel} className="card-link">
                致电
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Recurit;
