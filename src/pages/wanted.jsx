import React, { Component } from "react";
import Store from "../server/api";

class Wanted extends Component {
  state = {
    subject: "",
    salary: "",
    tel: "",
    introduce: ""
  };

  addWanted = async () => {
    let { subject, salary, tel, introduce } = this.state;
    alert(await Store.wanted(subject, salary, tel, introduce).msg);
  };

  render() {
    return (
      <div className="container">
        <h4>求职简介</h4>
        <hr />
        <div className="row">
          <div className="form-group col-5">
            <label>科目</label>
            <select
              className="form-control"
              value={this.state.subject}
              onChange={e => this.setState({ subject: e.target.value })}
            >
              <option>语文</option>
              <option>数学</option>
            </select>
          </div>
          <div className="form-group col-5">
            <label>薪资</label>
            <input
              type="number"
              className="form-control"
              placeholder="300"
              value={this.state.salary}
              onChange={e => this.setState({ salary: e.target.value })}
            />
            <small id="emailHelp" className="form-text text-muted">
              市场均价300/天。
            </small>
          </div>
        </div>
        <div className="form-group">
          <label>联系方式</label>
          <input
            type="text"
            className="form-control"
            placeholder="手机号"
            value={this.state.tel}
            onChange={e => this.setState({ tel: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>自我简介</label>
          <textarea
            className="form-control"
            rows="3"
            value={this.state.introduce}
            onChange={e => this.setState({ introduce: e.target.value })}
          />
        </div>
        <button onClick={this.addWanted} className="btn btn-primary">
          提交
        </button>
      </div>
    );
  }
}

export default Wanted;
