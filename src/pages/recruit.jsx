import React, { Component } from "react";
import Store from "../server/api";

class Recruit extends Component {
  state = {
    subject: "",
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
              onChange={e =>
                this.setState({
                  subject: e.target.value
                })
              }
              value={this.state.subject}
            >
              <option>语文</option>
              <option>数学</option>
            </select>
          </div>
          <div className="form-group col-5">
            <label>年级</label>
            <select
              className="form-control"
              onChange={e =>
                this.setState({
                  grade: e.target.value
                })
              }
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
            onChange={e =>
              this.setState({
                tel: e.target.value
              })
            }
            value={this.state.tel}
          />
        </div>
        <div className="form-group">
          <label>招聘要求</label>
          <textarea
            className="form-control"
            rows="3"
            onChange={e =>
              this.setState({
                introduce: e.target.value
              })
            }
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
            onChange={e =>
              this.setState({
                salary: e.target.value
              })
            }
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
