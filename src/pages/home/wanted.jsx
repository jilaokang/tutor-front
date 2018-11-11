import React, { Component } from "react";
import Search from "../../component/search";
import Store from "../../server/api";

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
          <div className="card" style={{ width: "100%", marginBottom: "8px" }}>
            <img
              className="card-img-top"
              src="http://img.cbigame.com/upload/images/2016/1023/1477200004265032.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{v.subject}</h5>
              <p className="card-text">{v.introduce}</p>
              <a href={"tel:" + v.tel} className="btn btn-primary">
                致电
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Wanted;
