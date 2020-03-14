import React, { Component } from "react";
import EditUser from "./EditUser";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
      userObj: {}
    };
  }
  styleButton = () => {
    if (this.props.displayForm === true) {
      return (
        <div
          className="btn btn-block btn-outline-secondary"
          onClick={() => this.props.connect()}
        >
          Đóng
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-block btn-outline-info"
          onClick={() => this.props.connect()}
        >
          Thêm mới
        </div>
      );
    }
  };
  isChange = e => {
    this.setState({
      tempValue: e.target.value
    });
    this.props.contentSearchProps(this.state.tempValue);
  };
  getUserEditInfo = info => {
    this.setState({
      userObj: info
    });
    this.props.getUserEditInfoApp(info);
  };
  isShowEditForm = () => {
    if (this.props.editUserStatus === true) {
      return (
        <EditUser
          getUserEditInfo={info => this.getUserEditInfo(info)}
          changeEditUserStatus={() => this.props.changeEditUserStatus()}
          userEditObject={this.props.userEditObject}
        />
      );
    }
  };

  render() {
    return (
      <div className="col-12">
        {this.isShowEditForm()}
        <div className="form-group">
          <div className="btn-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên cần tìm kiếm "
              onChange={e => this.isChange(e)}
            />
            <div
              className="btn btn-info"
              onClick={() =>
                this.props.contentSearchProps(this.state.tempValue)
              }
            >
              Tìm
            </div>
          </div>

          {this.styleButton()}
        </div>
        <hr />
      </div>
    );
  }
}
