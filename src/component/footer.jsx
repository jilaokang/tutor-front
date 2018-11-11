import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterNav extends Component {
  state = {};
  render() {
    return (
      <footer
        style={{
          position: "fixed",
          width: "100vw",
          bottom: "0",
          zIndex: "999",
          background: "#ffffff"
        }}
      >
        <div className="row" style={{ borderTop: "1px solid #cccccc" }}>
          <Link className="center item-3" to="/home/home">
            <span className="iconfont icon-home nav-footer__icon" />
            <p className="nav-footer__ttitle">首页</p>
          </Link>
          <Link className="center item-3" to="/home/recruit">
            <span className="iconfont icon-zhaopin1 nav-footer__icon" />
            <p className="nav-footer__ttitle">家教招聘</p>
          </Link>
          <Link className="center item-3" to="/home/wanted">
            <span className="iconfont icon-rencaizhongxin nav-footer__icon" />
            <p className="nav-footer__ttitle">求职中心</p>
          </Link>
          <Link className="center item-3" to="/home/me">
            <span className="iconfont icon-person nav-footer__icon" />
            <p className="nav-footer__ttitle">个人中心</p>
          </Link>
        </div>
      </footer>
    );
  }
}

export default FooterNav;
