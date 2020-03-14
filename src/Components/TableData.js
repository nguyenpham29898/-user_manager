import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

export default class TableData extends Component {
  deleteButtonClick = idUser => {
    this.props.deleteUser(idUser);
  };
  mappingDataUser = () =>
    this.props.dataUserProps.map((value, key) => {
      return (
        <TableDataRow
          deleteButtonClick={idUser => this.deleteButtonClick(idUser)}
          changeEditUserStatus={() => this.props.changeEditUserStatus()}
          editFunClick={user => this.props.editFun(value)}
          userName={value.name}
          key={key}
          stt={key}
          tel={value.tel}
          permission={value.permission}
          id={value.id}
        />
      );
    });

  render() {
    return (
      <div className="col">
        <table className="table table-striped table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>SĐT</th>
              <th>Quyền</th>
              <th>Tùy chọn</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}
