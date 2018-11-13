import React, { Component } from "react";
import Store from "../server/api";
import inputHandle from "../utils/input";

class Wanted extends Component {
  state = {
    subject: "语文",
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
              name="subject"
              value={this.state.subject}
              onChange={inputHandle.bind(this)}
            >
              <option value="语文">语文</option>
              <option value="数学">数学</option>
            </select>
          </div>
          <div className="form-group col-5">
            <label>薪资</label>
            <input
              type="number"
              className="form-control"
              placeholder="300"
              name="salary"
              value={this.state.salary}
              onChange={inputHandle.bind(this)}
            />
            <small className="form-text text-muted">市场均价300/天。</small>
          </div>
        </div>
        <div className="form-group">
          <label>联系方式</label>
          <input
            type="text"
            className="form-control"
            placeholder="手机号"
            name="tel"
            value={this.state.tel}
            onChange={inputHandle.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>自我简介</label>
          <textarea
            className="form-control"
            rows="3"
            name="introduce"
            value={this.state.introduce}
            onChange={inputHandle.bind(this)}
          />
        </div>
        <button className="btn btn-primary" onClick={this.addWanted}>
          提交
        </button>
      </div>
    );
  }
}

export default Wanted;
