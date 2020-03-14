import React, { Component } from "react";

export default class TableDataRow extends Component {
  permissionShow = () => {
    if (this.props.permission === 1) {
      return "Admin";
    } else if (this.props.permission === 2) {
      return "Moderator";
    } else {
      return "Nomal user";
    }
  };
  editClick = () => {
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  };
  deleteButtonClick = idUser => {
    this.props.deleteButtonClick(idUser);
  };
  render() {
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning" onClick={() => this.editClick()}>
              <div className="fa fa-edit">Sửa</div>
            </div>
            <div
              className="btn btn-danger"
              onClick={idUser => this.deleteButtonClick(this.props.id)}
            >
              <div className="fa fa-trash">Xóa</div>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
