import React, { Component } from "react";
import { Link } from "react-router-dom";
import Store from "../server/api";

class App extends Component {
  state = {
    user: "",
    password: ""
  };

  checkLogin = async () => {
    let { user, password } = this.state;
    let result = await Store.checkLogin(user, password);

    alert(result.msg);
    document.cookie = "token=" + result.token;

    if (result.token) this.props.history.push("home/home");
  };

  render() {
    return (
      <div className="container" style={{ textAlign: "center", width: "100%" }}>
        <div style={{ textAlign: "left" }}>
          <h3>登录</h3>
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="输入用户名"
              onChange={e => this.setState({ user: e.target.value })}
              value={this.state.user}
            />
          </div>
          <div className="form-group">
            <label>密码</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="输入密码"
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
          </div>
          <button
            onClick={this.checkLogin}
            type="submit"
            className="btn btn-primary"
          >
            登录
          </button>

          <div style={{ float: "right", color: "#aaaaaa" }}>
            <Link className="nav-footer__ttitle" to="/signup">
              注册新账号
            </Link>
            |
            <Link className="nav-footer__ttitle" to="/decrypt">
              找回密码
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
