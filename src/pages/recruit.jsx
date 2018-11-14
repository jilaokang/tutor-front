import React, { Component } from "react";
import Store from "../server/api";
import inputHandle from "../utils/input";

class Recruit extends Component {
  constructor(props) {
    super(props);
    this.inputHandle = inputHandle.bind(this);
  }

  state = {
    subject: "数学",
    salary: "",
    tel: "",
    introduce: "",
    grade: ""
  };

  addRecruit = async () => {
    let { subject, salary, tel, introduce, grade } = this.state;
    alert(await Store.recruit(subject, salary, tel, introduce, grade).msg);
  };

  render() {
    return (
      <div className="container">
        <h4>招聘要求</h4>
        <hr />
        <div className="row">
          <div className="form-group col-5">
            <label>科目</label>
            <select
              className="form-control"
              name="subject"
              onChange={this.inputHandle}
              value={this.state.subject}
            >
              <option value="语文">语文</option>
              <option value="数学">数学</option>
            </select>
          </div>
          <div className="form-group col-5">
            <label>年级</label>
            <select
              className="form-control"
              name="grade"
              onChange={this.inputHandle}
              value={this.state.grade}
            >
              <option>一年级</option>
              <option>二年级</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>联系方式</label>
          <input
            type="number"
            className="form-control"
            placeholder="手机号"
            name="tel"
            onChange={this.inputHandle}
            value={this.state.tel}
          />
        </div>
        <div className="form-group">
          <label>招聘要求</label>
          <textarea
            className="form-control"
            rows="3"
            name="introduce"
            onChange={this.inputHandle}
            value={this.state.introduce}
          />
        </div>
        <hr />
        <div className="form-group">
          <label>薪资</label>
          <input
            type="number"
            className="form-control"
            placeholder="300"
            name="salary"
            onChange={this.inputHandle}
            value={this.state.salary}
          />
          <small id="emailHelp" className="form-text text-muted">
            市场均价300/天。
          </small>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.addRecruit}
        >
          提交
        </button>
      </div>
    );
  }
}

export default Recruit;
